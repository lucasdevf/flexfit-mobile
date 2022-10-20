import styled from 'styled-components/native'

import { Input } from '../../../components/Input'

export const Overlay = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.4);

  justify-content: flex-end;
`

export const AddExerciseContainer = styled.View`
  padding: 24px;
  background: white;

  border-top-right-radius: 24px;
  border-top-left-radius: 24px;
`

export const Form = styled.View`
  margin-top: 24px;
`

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0;
`

export const InputStyled = styled(Input)`
  flex: 1;
`
