import { CategoryProps } from '../../Categories/types'
import { LocationProps } from '../../Header/types'
import { RestaurantProps } from '../types'

export type RestaurantItemProps = {
  restaurant: RestaurantProps
  categories: CategoryProps[]
  currentLocation: LocationProps
}

export type PriceRatingStyle = {
  isExpensive: boolean
}
