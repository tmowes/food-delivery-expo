import React from 'react'
import * as S from './styles'
import { MapZoomControlProps } from './types'

const MapZoomControl = ({ zoomMap }: MapZoomControlProps) => {
  return (
    <S.Container>
      <S.SideView>
        <S.PlusView style={{ elevation: 8 }}>
          <S.PlusButton onPress={() => zoomMap('+')}>
            <S.PlusIcon />
          </S.PlusButton>
        </S.PlusView>
        <S.FitView style={{ elevation: 8 }}>
          <S.FitButton onPress={() => zoomMap('#')}>
            <S.FitIcon />
          </S.FitButton>
        </S.FitView>
        <S.MinusView style={{ elevation: 8 }}>
          <S.MinusButton onPress={() => zoomMap('-')}>
            <S.MinusIcon />
          </S.MinusButton>
        </S.MinusView>
      </S.SideView>
    </S.Container>
  )
}

export default MapZoomControl
