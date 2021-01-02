import React from 'react'

import * as S from './styles'
import { HeaderProps } from './types'

const Header = ({ centerLabel, left, leftPress, right, rightPress }: HeaderProps) => {
  return (
    <S.Container>
      <S.LeftView>
        <S.LeftButton onPress={leftPress}>
          <S.LeftIcon source={left} />
        </S.LeftButton>
      </S.LeftView>
      <S.CenterView>
        <S.Title>{`  ${centerLabel}  `}</S.Title>
      </S.CenterView>
      <S.RightView>
        <S.RightButton onPress={rightPress}>
          <S.RightIcon source={right} />
        </S.RightButton>
      </S.RightView>
    </S.Container>
  )
}

export default Header
