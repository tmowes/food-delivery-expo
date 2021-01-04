import React, { useMemo } from 'react'
import { icons } from '../../../constants'

import * as S from './styles'
import { RestaurantMenuProps } from './types'

const RestaurantMenu = ({
  food,
  orderItems,
  editOrder,
}: RestaurantMenuProps) => {
  const { name, photo, menuId, price, calories, description } = food

  const getItemQuantity = useMemo(() => {
    let orderItem = orderItems.filter(a => a.menuId === menuId)
    if (orderItem.length > 0) {
      return orderItem[0].quantity
    }
    return 0
  }, [orderItems])

  return (
    <S.Container>
      <S.ImageView>
        <S.FoodImage source={photo} />
        <S.QuantityContainer>
          <S.MinusView>
            <S.MinusButton onPress={() => editOrder('-', menuId, price)}>
              <S.MinusIcon />
            </S.MinusButton>
          </S.MinusView>
          <S.QuantityView>
            <S.Quantity>{getItemQuantity}</S.Quantity>
          </S.QuantityView>
          <S.PlusView>
            <S.PlusButton onPress={() => editOrder('+', menuId, price)}>
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
