import { MenuProps } from '../../../components/Restaurants/types'
import { OrderProps } from '../types'

export type RestaurantMenuProps = {
  food: MenuProps
  orderItems: OrderProps[]
  editOrder: (action: string, menuId: number, price: number) => void
}
