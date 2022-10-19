import styled from 'styled-components/native'

import { SafeAreaView } from 'react-native-safe-area-context'

export const HomeContainer = styled(SafeAreaView)`
  flex: 1;
  padding-top: 24px;
`

export const Content = styled.View`
  flex: 1;

  align-items: center;
  justify-content: center;

  padding: 24px;

  background: white;
`

export const Buttons = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  margin-top: 48px;
`
