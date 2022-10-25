import styled, { css } from 'styled-components/native'
import { Input } from '../../../Input'

export const GeneralContainer = styled.View``

export const Form = styled.View`
  flex-direction: row;
  align-items: flex-start;
`

export const InputStyled = styled(Input)`
  flex: 1;
`

export const Guidance = styled.Text`
  margin: 20px 0;

  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_500};
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`
