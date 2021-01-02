import { Dispatch, SetStateAction } from 'react'
import { RestaurantProps } from '../Restaurants/types'

export type CategoriesProps = {
  categories: CategoryProps[]
  selectedCategory: number | null
  setSelectedCategory: Dispatch<SetStateAction<number | null>>
  setRestaurants: Dispatch<SetStateAction<RestaurantProps[]>>
  restaurantData: RestaurantProps[]
}

export type CategoryProps = {
  id: number
  name: string
  icon: any
}
