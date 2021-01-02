import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import CategoryItem from './CategoryItem'

import * as S from './styles'
import { CategoriesProps } from './types'

const Categories = ({
  categories,
  selectedCategory,
  setSelectedCategory,
  setRestaurants,
  restaurantData,
}: CategoriesProps) => {
  return (
    <S.Container>
      <S.Title>Categories</S.Title>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingVertical: 16 }}
      >
        {categories.map(category => (
          <CategoryItem
            key={String(category.id)}
            category={category}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            setRestaurants={setRestaurants}
            restaurantData={restaurantData}
          />
        ))}
      </ScrollView>
    </S.Container>
  )
}

export default Categories
