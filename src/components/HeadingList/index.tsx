import { HeadingListContainer, Title, Line } from './styles'

interface Props {
  title: string
}

export function HeadingList({ title }: Props) {
  return (
    <HeadingListContainer>
      <Title>{title}</Title>

      <Line
        colors={['#EE9D00', '#FFF']}
        start={{ x: 0.0, y: 1.0 }}
        end={{ x: 1.0, y: 1.0 }}
      ></Line>
    </HeadingListContainer>
  )
}
