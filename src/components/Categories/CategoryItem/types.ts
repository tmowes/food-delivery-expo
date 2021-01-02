import { Dispatch, SetStateAction } from 'react'
import { RestaurantProps } from '../../Restaurants/types'
import { CategoryProps } from '../types'

export type CategoryItemProps = {
  category: CategoryProps
  selectedCategory: number | null
  setSelectedCategory: Dispatch<SetStateAction<number | null>>
  setRestaurants: Dispatch<SetStateAction<RestaurantProps[]>>
  restaurantData: RestaurantProps[]
}

export type SelectedStyle = {
  isSelectedCategory: boolean
}
