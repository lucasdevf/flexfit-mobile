import styled, { css } from 'styled-components/native'

export const CalendarContainer = styled.View`
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_200};
  padding: 16px;
  border-radius: 8px;
`

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  border-bottom: 1px solid red;
  padding-bottom: 16px;
  margin-bottom: 16px;
`

export const Month = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.MEDIUM};
  `}
`

export const Weekdays = styled.View`
  flex-direction: row;
  justify-content: space-between;
`

export const Weekday = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_500};
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`

export const ButtonMoveMonths = styled.TouchableOpacity``
