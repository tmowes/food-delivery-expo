import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { ScrollView } from 'react-native-gesture-handler'

import * as S from './styles'
import * as C from '../../components'

import { RestaurantParams } from './types'
import { RestaurantProps } from '../../components/Restaurants/types'
import { LocationProps } from '../../components/Header/types'
import { icons } from '../../constants'
import RestaurantMenu from './RestaurantMenu'
import RestaurantOrder from './RestaurantMenu/RestaurantOrder'

const Restaurant: React.FC = () => {
  const { params } = useRoute()
  const [currentLocation, setCurrentLocation] = useState({} as LocationProps)
  const [restaurant, setRestaurant] = useState({} as RestaurantProps)
  const { goBack } = useNavigation()

  useEffect(() => {
    const { restaurant, currentLocation } = params as RestaurantParams
    setRestaurant(restaurant)
    setCurrentLocation(currentLocation)
  }, [])

  const { name, photo, menu } = restaurant
  const { streetName } = currentLocation

  return (
    <S.Container>
      <C.Header
        centerLabel={name}
        left={icons.back}
        leftPress={goBack}
        right={icons.list}
        rightPress={() => true}
      />
      {menu && (
        <ScrollView
          horizontal
          pagingEnabled
          scrollEventThrottle={16}
          snapToAlignment="center"
          showsHorizontalScrollIndicator={false}
          // onScroll
        >
          {menu.map((food, index) => (
            <RestaurantMenu key={`menu-${index}`} food={food} />
          ))}
        </ScrollView>
      )}
      <RestaurantOrder />
    </S.Container>
  )
}

export default Restaurant
