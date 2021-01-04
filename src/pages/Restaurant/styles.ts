import Animated from 'react-native-reanimated'
import styled, { css } from 'styled-components/native'
import { sHeight, sWidth } from '../../constants/dimensions'

export const Container = styled.SafeAreaView`
  ${({ theme: { colors } }) => css`
    flex: 1;
    padding-top: 28px;
    background: ${colors.backgroundColor};
  `}
`

export const Title = styled.Text`
  color: whitesmoke;
  font-size: 32px;
`

export const MenuView = styled.View`
  /* height: ${sHeight * 0.56}px; */
  flex: 2.5;
`

export const MenuScrollView = styled(Animated.ScrollView).attrs({
  horizontal: true,
  snapToInterval: sWidth,
  decelerationRate: 'fast',
  bounces: false,
  scrollEventThrottle: 16,
  showsHorizontalScrollIndicator: false,
  snapToAlignment: 'center',
  pagingEnabled: true,
})``

export const PaginationRow = styled.View`
  flex-direction: row;
  height: 20px;
  align-items: center;
  justify-content: center;
  margin: 4px auto 0;
`
