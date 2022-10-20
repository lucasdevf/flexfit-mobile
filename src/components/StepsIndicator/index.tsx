import { Indicator, StepsIndicatorContainer } from './styles'

export interface StepsIndicatorProps {
  steps: string[]
  indexActive: number
}

export function StepsIndicator({ steps, indexActive }: StepsIndicatorProps) {
  return (
    <StepsIndicatorContainer>
      {steps.map((step, index) => (
        <Indicator key={step} active={index === indexActive} />
      ))}
    </StepsIndicatorContainer>
  )
}
