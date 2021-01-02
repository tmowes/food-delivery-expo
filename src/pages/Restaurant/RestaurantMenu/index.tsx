import React from 'react'
import { icons } from '../../../constants'

import * as S from './styles'
import { RestaurantMenuProps } from './types'

const RestaurantMenu = ({ food }: RestaurantMenuProps) => {
  const { name, photo, menuId, price, calories, description } = food
  return (
    <S.Container>
      <S.ImageView>
        <S.FoodImage source={photo} />
        <S.QuantityContainer>
          <S.MinusView>
            <S.MinusButton>
              <S.MinusIcon />
            </S.MinusButton>
          </S.MinusView>
          <S.QuantityView>
            <S.Quantity>{price}</S.Quantity>
          </S.QuantityView>
          <S.PlusView>
            <S.PlusButton>
              <S.PlusIcon />
            </S.PlusButton>
          </S.PlusView>
        </S.QuantityContainer>
      </S.ImageView>
      <S.Details>
        <S.FoodName>{`${name}  -  $${price.toFixed(2)}`}</S.FoodName>
        <S.Description>{description}</S.Description>
      </S.Details>
      <S.CaloriesView>
        <S.CaloriesImage source={icons.fire} />
        <S.Calories>{`${calories.toFixed(2)} cal`}</S.Calories>
      </S.CaloriesView>
    </S.Container>
  )
}

export default RestaurantMenu
