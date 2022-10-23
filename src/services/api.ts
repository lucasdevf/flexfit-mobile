import axios from 'axios'

import AsyncStorage from '@react-native-async-storage/async-storage'

const api = axios.create({
  baseURL: 'http://192.168.100.176:3333',
})

api.interceptors.request.use(async (config) => {
  if (config.headers) {
    const token = await AsyncStorage.getItem('@authToken')

    config.headers.Authorization = `Bearer ${token}`

    return config
  }
})

api.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    let errorMessage = error?.response?.data?.message ?? error?.message

    if (error?.message === 'Network Error') {
      errorMessage =
        'Estamos enfrentando problemas. Tente novamente mais tarde.'
    }

    return Promise.reject(errorMessage)
  },
)

export { api }
