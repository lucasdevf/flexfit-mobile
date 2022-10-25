import { Ruler } from 'phosphor-react-native'
import { useState } from 'react'
import { StatusBar, Text } from 'react-native'
import { useTheme } from 'styled-components/native'
import { HeaderGoBack } from '../../components/HeaderGoBack'
import { Heading } from '../../components/Heading'
import { General } from '../../components/pages/Measurements/General'
import { TabProps, Tabs } from '../../components/Tabs'
import { MeasurementsContainer } from './styles'

export function Measurements() {
  const theme = useTheme()

  const tabs: TabProps[] = [
    {
      id: 1,
      name: 'Geral',
      component: <General />,
    },
    {
      id: 2,
      name: 'Detalhado',
      component: <Text>Teste 2</Text>,
    },
  ]

  const [tabActive, setTabActive] = useState(1)

  return (
    <MeasurementsContainer>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />

      <HeaderGoBack />

      <Heading
        icon={<Ruler size={32} color={theme.COLORS.PURPLE_500} />}
        title="Medidas"
        subtitle="Cadastre e acompanhe a evolução de todas as suas medidas"
      />

      <Tabs
        tabs={tabs}
        tabActive={tabActive}
        onClick={(tabId) => setTabActive(Number(tabId))}
        style={{ marginTop: 36 }}
      />
    </MeasurementsContainer>
  )
}
