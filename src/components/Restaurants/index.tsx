import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'

import RestaurantItem from './RestaurantItem'
import * as S from './styles'
import { RestaurantsProps } from './types'

const Restaurants = ({ restaurants, categories, currentLocation }: RestaurantsProps) => {
  return (
    <S.Container>
      <ScrollView showsVerticalScrollIndicator={false}>
        {restaurants.map(restaurant => (
          <RestaurantItem
            key={String(restaurant.id)}
            restaurant={restaurant}
            categories={categories}
            currentLocation={currentLocation}
          />
        ))}
      </ScrollView>
    </S.Container>
  )
}

export default Restaurants
