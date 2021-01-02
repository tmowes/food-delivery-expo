import React from 'react'
import { StatusBar, Image } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useTheme } from 'styled-components/native'

import { icons } from '../constants'
import * as P from '../pages'
import * as C from '../components'

const { Navigator, Screen } = createBottomTabNavigator()

const TabRoutes: React.FC = () => {
  const { colors } = useTheme()

  const tabBarOptions = {
    showLabel: false,
    style: { borderTopWidth: 0, elevation: 0, backgroundColor: 'transparent' },
  }

  const iconsSize = { width: 25, height: 25 }

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      <Navigator tabBarOptions={tabBarOptions}>
        <Screen
          name="Home"
          component={P.Home}
          options={{
            tabBarIcon: ({ focused }) => (
              <Image
                source={icons.cutlery}
                resizeMode="contain"
                style={[iconsSize, { tintColor: focused ? colors.foodPrimary : colors.foodGrayLight }]}
              />
            ),
            tabBarButton: props => <C.TabBarCustomButton {...props} />,
          }}
        />
        <Screen
          name="Search"
          component={P.Search}
          options={{
            tabBarIcon: ({ focused }) => (
              <Image
                source={icons.search}
                resizeMode="contain"
                style={[iconsSize, { tintColor: focused ? colors.foodPrimary : colors.foodGrayLight }]}
              />
            ),
            tabBarButton: props => <C.TabBarCustomButton {...props} />,
          }}
        />
        <Screen
          name="Liked"
          component={P.Liked}
          options={{
            tabBarIcon: ({ focused }) => (
              <Image
                source={icons.like}
                resizeMode="contain"
                style={[iconsSize, { tintColor: focused ? colors.foodPrimary : colors.foodGrayLight }]}
              />
            ),
            tabBarButton: props => <C.TabBarCustomButton {...props} />,
          }}
        />
        <Screen
          name="Profile"
          component={P.Profile}
          options={{
            tabBarIcon: ({ focused }) => (
              <Image
                source={icons.user}
                resizeMode="contain"
                style={[iconsSize, { tintColor: focused ? colors.foodPrimary : colors.foodGrayLight }]}
              />
            ),
            tabBarButton: props => <C.TabBarCustomButton {...props} />,
          }}
        />
      </Navigator>
    </>
  )
}

export default TabRoutes
