import React from 'react'
import { Marker } from 'react-native-maps'

import * as S from './styles'
import { CarMarkerProps } from './types'

const CarMarker = ({ coordinate, angle }: CarMarkerProps) => {
  return (
    <Marker
      coordinate={coordinate}
      flat
      anchor={{ x: 0.5, y: 0.5 }}
      rotation={angle}
    >
      <S.CarIcon />
    </Marker>
  )
}

export default CarMarker
