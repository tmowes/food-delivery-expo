import React from 'react'
import { StatusBar } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { useTheme } from 'styled-components/native'

import * as P from '../pages'
import TabRoutes from './tab.routes'

const { Navigator, Screen } = createStackNavigator()

const AppRoutes: React.FC = () => {
  const {
    colors: { backgroundColor },
  } = useTheme()

  const screenOptions = { headerShown: false, cardStyle: { backgroundColor } }

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      <Navigator screenOptions={screenOptions}>
        <Screen name="TabRoutes" component={TabRoutes} />
        <Screen name="Home" component={P.Home} />
        <Screen name="Restaurant" component={P.Restaurant} />
        <Screen name="Delivery" component={P.Delivery} />
      </Navigator>
    </>
  )
}

export default AppRoutes
