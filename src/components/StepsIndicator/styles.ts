import styled from 'styled-components/native'

export const StepsIndicatorContainer = styled.View`
  flex-direction: row;
`

interface IndicatorProps {
  active: boolean
}

export const Indicator = styled.View<IndicatorProps>`
  height: 8px;
  width: ${({ active }) => (active ? '20px' : '12px')};
  margin-left: 8px;

  border-radius: 999px;

  background: ${({ active, theme }) =>
    active ? theme.COLORS.PURPLE_300 : theme.COLORS.GRAY_300};
`
