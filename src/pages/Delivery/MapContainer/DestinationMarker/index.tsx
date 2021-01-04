import React from 'react'
import { Marker } from 'react-native-maps'

import * as S from './styles'
import { DestinationMarkerProps } from './types'

const DestinationMarker = ({ coordinate }: DestinationMarkerProps) => {
  return (
    <Marker coordinate={coordinate}>
      <S.Container>
        <S.ImageView>
          <S.DestinationIcon />
        </S.ImageView>
      </S.Container>
    </Marker>
  )
}

export default DestinationMarker
