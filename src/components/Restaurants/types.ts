import { CategoryProps } from '../Categories/types'
import { LocationProps } from '../Header/types'

export type RestaurantsProps = {
  restaurants: RestaurantProps[]
  categories: CategoryProps[]
  currentLocation: LocationProps
}

export type RestaurantProps = {
  id: number
  name: string
  rating: number
  categories: number[]
  priceRating: number
  photo: any
  duration: string
  location: {
    latitude: number
    longitude: number
  }
  courier: {
    avatar: any
    name: string
  }
  menu: MenuProps[]
}

export type MenuProps = {
  menuId: number
  name: string
  photo: any
  description: string
  calories: number
  price: number
}
