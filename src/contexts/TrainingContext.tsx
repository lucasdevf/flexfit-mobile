import { createContext, ReactNode, useCallback, useState } from 'react'
import { TrainingProps } from '../components/Training'

interface TrainingContextType {
  training: TrainingProps
  handleChangeWeekdays: (weekdays: number[]) => void
  handleChangeName: (name: string) => void
}

export const TrainingContext = createContext({} as TrainingContextType)

interface TrainingContextProviderProps {
  children: ReactNode
}

export function TrainingContextProvider({
  children,
}: TrainingContextProviderProps) {
  const [training, setTraining] = useState({} as TrainingProps)

  const handleChangeWeekdays = useCallback(
    (weekdays: number[]) => {
      setTraining((prevState) => ({ ...prevState, weekdays }))
    },
    [training],
  )

  const handleChangeName = useCallback(
    (name: string) => {
      setTraining((prevState) => ({ ...prevState, name }))
    },
    [training],
  )

  return (
    <TrainingContext.Provider
      value={{
        training,
        handleChangeWeekdays,
        handleChangeName,
      }}
    >
      {children}
    </TrainingContext.Provider>
  )
}
