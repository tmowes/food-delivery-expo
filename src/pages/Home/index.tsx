import React, { useState } from 'react'

import { homeData } from '../../data'
import * as C from '../../components'
import * as S from './styles'
import { icons } from '../../constants'

const Home: React.FC = () => {
  const { initialCurrentLocation, categoryData, restaurantData } = homeData
  const [currentLocation, setCurrentLocation] = useState(initialCurrentLocation)
  const [categories, setCategories] = useState(categoryData)
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null)
  const [restaurants, setRestaurants] = useState(restaurantData)

  const { streetName } = currentLocation

  return (
    <S.Container>
      <C.Header
        centerLabel={streetName}
        left={icons.nearby}
        leftPress={() => true}
        right={icons.basket}
        rightPress={() => true}
      />
      <C.Categories
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        setRestaurants={setRestaurants}
        restaurantData={restaurantData}
      />
      <C.Restaurants restaurants={restaurants} categories={categories} currentLocation={currentLocation} />
    </S.Container>
  )
}

export default Home
