import { LocationProps } from '../../components/Header/types'
import { RestaurantProps } from '../../components/Restaurants/types'

export type RestaurantParams = {
  restaurant: RestaurantProps
  currentLocation: LocationProps
}

export type OrderProps = {
  menuId: number
  quantity: number
  price: number
  total: number
}
