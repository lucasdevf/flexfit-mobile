import { useFocusEffect } from '@react-navigation/native'
import { useCallback } from 'react'
import { ActivityIndicator } from 'react-native'
import { useQuery } from 'react-query'
import { api } from '../../services/api'
import { MeasurementProps } from '../pages/Measurements/General'
import { Label, Text, WeightContainer, LinearGradient } from './styles'

export function Weight() {
  const {
    data: measurements,
    error: errorFetch,
    isLoading,
    refetch,
  } = useQuery<MeasurementProps>(
    '@measurements/measurements',
    fetchMeasurements,
    {
      cacheTime: 0,
    },
  )

  async function fetchMeasurements() {
    const response = await api.get('/users/measurements/last')

    return response.data
  }

  useFocusEffect(
    useCallback(() => {
      refetch()
    }, []),
  )

  return (
    <LinearGradient
      colors={['#5552FF', '#EE9D00']}
      start={{ x: 1.0, y: 0 }}
      end={{ x: 1.0, y: 1.1 }}
    >
      <WeightContainer>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <Text>{errorFetch || `${measurements?.weight} kg`}</Text>
        )}
        <Label>peso atual</Label>
      </WeightContainer>
    </LinearGradient>
  )
}
