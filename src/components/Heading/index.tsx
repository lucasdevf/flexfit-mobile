import { HeadingContainer, Title } from './styles'

interface Props {
  title: string
}

export function Heading({ title }: Props) {
  return (
    <HeadingContainer>
      <Title>{title}</Title>
    </HeadingContainer>
  )
}
