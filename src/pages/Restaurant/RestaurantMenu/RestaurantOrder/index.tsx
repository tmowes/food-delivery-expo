import { useNavigation } from '@react-navigation/native'
import React, { useCallback, useMemo } from 'react'

import * as S from './styles'
import { RestaurantOrderProps } from './types'

const RestaurantOrder = (props: RestaurantOrderProps) => {
  const { currentLocation, restaurant, orderItems } = props
  const { streetName } = currentLocation
  const { navigate } = useNavigation()

  const goToMapView = useCallback(() => {
    navigate('Delivery', {
      restaurant,
      currentLocation,
    })
  }, [restaurant, currentLocation])

  const getCartItems = useMemo(() => {
    return orderItems.reduce((a, b) => a + (b.quantity || 0), 0)
  }, [orderItems])

  const getCartTotal = useMemo(() => {
    return orderItems.reduce((a, b) => a + (b.total || 0), 0).toFixed(2)
  }, [orderItems])

  return (
    <S.Container>
      <S.OrderView>
        <S.Title>{`${getCartItems} items in Cart`}</S.Title>
        <S.Title>{`$ ${getCartTotal}`}</S.Title>
      </S.OrderView>
      <S.PaymentView>
        <S.LocationView>
          <S.LocationIcon />
          <S.SubTitle>{`Location: ${streetName}`}</S.SubTitle>
        </S.LocationView>
        <S.PaymentMethod>
          <S.PaymentIcon />
          <S.SubTitle>{`**** 8888`}</S.SubTitle>
        </S.PaymentMethod>
      </S.PaymentView>
      <S.CheckoutView>
        <S.CheckoutButton onPress={goToMapView}>
          <S.CheckoutButtonText>Order</S.CheckoutButtonText>
        </S.CheckoutButton>
      </S.CheckoutView>
    </S.Container>
  )
}

export default RestaurantOrder
