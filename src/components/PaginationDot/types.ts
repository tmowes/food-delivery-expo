import Animated from 'react-native-reanimated'

export type PaginationDotProps = {
  index: number
  currentIndex: Animated.SharedValue<number>
}
