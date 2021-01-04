import React from 'react'

import {
  interpolate,
  Extrapolate,
  useAnimatedStyle,
  useDerivedValue,
  interpolateColor,
} from 'react-native-reanimated'
import { useTheme } from 'styled-components'
import * as S from './styles'
import { PaginationDotProps } from './types'

const PaginationDot: React.FC<PaginationDotProps> = props => {
  const { index, currentIndex } = props
  const {
    colors: { foodGrayDark, foodPrimary },
  } = useTheme()

  const animatedBackground = useDerivedValue<any>(() =>
    interpolateColor(
      currentIndex.value,
      [index - 1, index, index + 1],
      [foodGrayDark, foodPrimary, foodGrayDark],
    ),
  )
  const animatedContainer = useAnimatedStyle(() => ({
    height: interpolate(
      currentIndex.value,
      [index - 1, index, index + 1],
      [6, 12, 6],
      Extrapolate.CLAMP,
    ),
    opacity: interpolate(
      currentIndex.value,
      [index - 1, index, index + 1],
      [0.4, 1, 0.4],
      Extrapolate.CLAMP,
    ),
    backgroundColor: animatedBackground.value,
  }))
  return <S.Dot style={animatedContainer} />
}

export default PaginationDot
