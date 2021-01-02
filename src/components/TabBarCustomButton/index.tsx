import React, { PropsWithChildren } from 'react'
import Svg, { Path } from 'react-native-svg'
import { useTheme } from 'styled-components/native'

import * as S from './styles'
import { TabBarCustomButtonProps } from './types'

const TabBarCustomButton = ({
  accessibilityState,
  children,
  onPress,
}: PropsWithChildren<TabBarCustomButtonProps>) => {
  const { colors } = useTheme()

  let isSelected = accessibilityState?.selected
  if (isSelected) {
    return (
      <S.Container>
        <S.Row>
          <S.Flex></S.Flex>
          <Svg width={75} height={61} viewBox="0 0 75 61">
            <Path
              d="M75.2 0v61H0V0c4.1 0 7.4 3.1 7.9 7.1C10 21.7 22.5 33 37.7 33c15.2 0 27.7-11.3 29.7-25.9.5-4 3.9-7.1 7.9-7.1h-.1z"
              fill={colors.background}
            />
          </Svg>
          <S.Flex></S.Flex>
        </S.Row>
        {onPress && <S.TabButtonActive onPress={e => onPress(e)}>{children}</S.TabButtonActive>}
      </S.Container>
    )
  } else {
    return <>{onPress && <S.TabButton onPress={e => onPress(e)}>{children}</S.TabButton>}</>
  }
}

export default TabBarCustomButton
