import styled, { css } from 'styled-components/native'

import { LinearGradient } from 'expo-linear-gradient'

export const HeadingListContainer = styled.View`
  flex-direction: row;
  align-items: center;

  margin-top: 36px;
`

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_500};
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`

export const Line = styled(LinearGradient)`
  height: 2px;

  flex: 1;
  margin-top: 4px;
  margin-left: 16px;

  border-radius: 999px;
`
