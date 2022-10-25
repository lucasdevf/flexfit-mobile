import styled, { css } from 'styled-components/native'

export const TabsContainer = styled.View`
  flex-direction: column;
`

export const WrapperTabs = styled.View`
  flex-direction: row;
  align-items: center;

  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 36px;
`

interface TabProps {
  active: boolean
}

export const Tab = styled.TouchableOpacity<TabProps>`
  align-items: center;
  justify-content: center;
  width: 50%;

  padding: 16px;

  ${({ theme, active }) => css`
    background: ${active ? theme.COLORS.PURPLE_500 : theme.COLORS.GRAY_200};
  `}
`

interface TabNameProps {
  active: boolean
}

export const TabName = styled.Text<TabNameProps>`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;

  ${({ theme, active }) => css`
    color: ${active ? theme.COLORS.WHITE : theme.COLORS.GRAY_700};
    font-family: ${active
      ? theme.FONT_FAMILY.SEMI_BOLD
      : theme.FONT_FAMILY.MEDIUM};
  `}
`
