import React, { useMemo } from 'react'

import * as S from './styles'
import { DestinationHeaderProps } from './types'

const DestinationHeader = (props: DestinationHeaderProps) => {
  const { streetName, distance, duration } = props
  const roundedDistance = useMemo(() => {
    return Math.ceil(distance)
  }, [distance])
  const roundedDuration = useMemo(() => {
    return Math.ceil(duration)
  }, [duration])
  return (
    <S.Container>
      <S.HeaderView style={{ elevation: 8 }}>
        <S.PinIcon />
        <S.Distance>{`${roundedDistance}km`}</S.Distance>
        <S.CenterView>
          <S.Street>{streetName}</S.Street>
        </S.CenterView>
        <S.Duration>{`${roundedDuration} mins`}</S.Duration>
      </S.HeaderView>
    </S.Container>
  )
}

export default DestinationHeader
