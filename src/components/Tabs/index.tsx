import { ReactNode } from 'react'
import { ViewProps } from 'react-native'
import { Tab, TabsContainer, TabName, WrapperTabs } from './styles'

export interface TabProps {
  id: number | string
  name: string
  component: ReactNode
}

interface Props extends ViewProps {
  tabs: TabProps[]
  tabActive: number | string
  onClick: (tabId: number | string) => void
}

export function Tabs({ tabs, tabActive, onClick, ...rest }: Props) {
  return (
    <TabsContainer {...rest}>
      <WrapperTabs>
        {tabs.map((tab) => (
          <Tab
            key={tab.id}
            active={tab.id === tabActive}
            onPress={() => onClick(tab.id)}
          >
            <TabName active={tab.id === tabActive}>{tab.name}</TabName>
          </Tab>
        ))}
      </WrapperTabs>

      {tabs.find((item) => item.id === tabActive)?.component}
    </TabsContainer>
  )
}
