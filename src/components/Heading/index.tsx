import { ReactNode } from 'react'

/* STYLES */
import { HeadingContainer, Header, Title, Subtitle } from './styles'

interface Props {
  title: string
  subtitle?: string
  icon?: ReactNode
}

export function Heading({ title, subtitle, icon }: Props) {
  return (
    <HeadingContainer>
      <Header>
        {icon}
        <Title style={{ marginLeft: icon ? 12 : 0 }}>{title}</Title>
      </Header>

      {subtitle && <Subtitle>{subtitle}</Subtitle>}
    </HeadingContainer>
  )
}
