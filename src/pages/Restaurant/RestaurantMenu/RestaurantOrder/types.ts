import { LocationProps } from '../../../../components/Header/types'
import { RestaurantProps } from '../../../../components/Restaurants/types'
import { OrderProps } from '../../types'

export type RestaurantOrderProps = {
  currentLocation: LocationProps
  restaurant: RestaurantProps
  orderItems: OrderProps[]
}
