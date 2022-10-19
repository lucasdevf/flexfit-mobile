import styled from 'styled-components/native'

import { SafeAreaView } from 'react-native-safe-area-context'

export const HomeContainer = styled(SafeAreaView)`
  flex: 1;
`

export const Content = styled.View`
  flex: 1;

  align-items: center;
  justify-content: center;

  padding: 24px;
`

export const Buttons = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 284px;
  margin-top: 48px;
`
