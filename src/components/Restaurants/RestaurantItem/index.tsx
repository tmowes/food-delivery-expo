import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { icons } from '../../../constants'
import CategoryName from './CategoryName'

import * as S from './styles'
import { RestaurantItemProps } from './types'

const RestaurantItem = ({ restaurant, categories, currentLocation }: RestaurantItemProps) => {
  const { name, photo, duration, rating, categories: restaurantCategories, priceRating } = restaurant
  const { navigate } = useNavigation()
  return (
    <S.Container>
      <S.Button onPress={() => navigate('Restaurant', { restaurant, currentLocation })}>
        <S.ImageView>
          <S.Image source={photo} />
          <S.TimeView>
            <S.TimeLabel>{duration}</S.TimeLabel>
          </S.TimeView>
        </S.ImageView>
        <S.Title>{name}</S.Title>
        <S.DetailsView>
          <S.StarIcon source={icons.star} />
          <S.Rating>{rating}</S.Rating>
          {restaurantCategories.map(category => (
            <CategoryName key={category} category={category} categories={categories} />
          ))}
          {[1, 2, 3].map(priceRate => (
            <S.PriceRating key={priceRate} isExpensive={priceRate <= priceRating}>{`$`}</S.PriceRating>
          ))}
        </S.DetailsView>
      </S.Button>
    </S.Container>
  )
}

export default RestaurantItem
