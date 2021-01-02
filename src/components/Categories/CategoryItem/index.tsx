import React, { useCallback } from 'react'

import * as S from './styles'
import { CategoryItemProps } from './types'

const CategoryItem = ({
  category,
  setSelectedCategory,
  selectedCategory,
  setRestaurants,
  restaurantData,
}: CategoryItemProps) => {
  const { id, icon, name } = category

  const onSelectCategory = useCallback((category: number) => {
    const restaurantList = restaurantData.filter(a => a.categories.includes(category))
    setRestaurants(restaurantList)
    setSelectedCategory(category)
  }, [])

  const isSelectedCategory = selectedCategory === id

  return (
    <S.Container isSelectedCategory={isSelectedCategory}>
      <S.Button onPress={() => onSelectCategory(id)}>
        <S.IconView isSelectedCategory={isSelectedCategory}>
          <S.Icon source={icon} />
        </S.IconView>
        <S.Title isSelectedCategory={isSelectedCategory}>{name}</S.Title>
      </S.Button>
    </S.Container>
  )
}

export default CategoryItem
