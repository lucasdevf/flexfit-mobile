import { Label, Text, WeightContainer, LinearGradient } from './styles'

export function Weight() {
  return (
    <LinearGradient
      colors={['#5552FF', '#EE9D00']}
      start={{ x: 1.0, y: 0 }}
      end={{ x: 1.0, y: 1.1 }}
    >
      <WeightContainer>
        <Text>56 kg</Text>
        <Label>peso atual</Label>
      </WeightContainer>
    </LinearGradient>
  )
}
