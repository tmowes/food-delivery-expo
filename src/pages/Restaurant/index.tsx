import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'

import * as S from './styles'
import * as C from '../../components'

import { OrderProps, RestaurantParams } from './types'
import { RestaurantProps } from '../../components/Restaurants/types'
import { LocationProps } from '../../components/Header/types'
import { icons } from '../../constants'
import RestaurantMenu from './RestaurantMenu'
import RestaurantOrder from './RestaurantMenu/RestaurantOrder'
import Animated, {
  useAnimatedRef,
  useAnimatedScrollHandler,
  useDerivedValue,
  useSharedValue,
} from 'react-native-reanimated'
import { sWidth } from '../../constants/dimensions'

const Restaurant: React.FC = () => {
  const { params } = useRoute()
  const [currentLocation, setCurrentLocation] = useState({} as LocationProps)
  const [restaurant, setRestaurant] = useState({} as RestaurantProps)
  const { goBack } = useNavigation()

  const [orderItems, setOrderItems] = useState<OrderProps[]>([])

  useEffect(() => {
    const { restaurant, currentLocation } = params as RestaurantParams
    setRestaurant(restaurant)
    setCurrentLocation(currentLocation)
  }, [])

  const { name, menu } = restaurant

  const scroll = useAnimatedRef<Animated.ScrollView>()
  const translateX = useSharedValue(0)
  const onScroll = useAnimatedScrollHandler({
    onScroll: ({ contentOffset: { x } }) => {
      translateX.value = x
    },
  })

  const currentIndex = useDerivedValue(() => translateX.value / sWidth)

  const editOrder = (action: string, menuId: number, price: number) => {
    let orderList = orderItems.slice()
    let item = orderList.filter(a => a.menuId === menuId)

    if (action === '+') {
      if (item.length > 0) {
        let newQty = item[0].quantity + 1
        item[0].quantity = newQty
        item[0].total = item[0].quantity * price
      } else {
        const newItem = {
          menuId,
          quantity: 1,
          price,
          total: price,
        }
        orderList.push(newItem)
      }

      setOrderItems(orderList)
    } else {
      if (item.length > 0) {
        if (item[0]?.quantity > 0) {
          let newQty = item[0].quantity - 1
          item[0].quantity = newQty
          item[0].total = newQty * price
        }
      }
      setOrderItems(orderList)
    }
  }

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
        <S.PaginationRow>
          {menu.map((_, index) => (
            <C.PaginationDot
              key={`dot-${index}`}
              {...{ index, currentIndex }}
            />
          ))}
        </S.PaginationRow>
      )}
      {menu && (
        <S.MenuView>
          <S.MenuScrollView ref={scroll} onScroll={onScroll}>
            {menu.map((food, index) => (
              <RestaurantMenu
                key={`menu-${index}`}
                food={food}
                orderItems={orderItems}
                editOrder={editOrder}
              />
            ))}
          </S.MenuScrollView>
        </S.MenuView>
      )}
      <RestaurantOrder
        currentLocation={currentLocation}
        restaurant={restaurant}
        orderItems={orderItems}
      />
    </S.Container>
  )
}

export default Restaurant
