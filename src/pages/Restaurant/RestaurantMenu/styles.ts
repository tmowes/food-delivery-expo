import styled, { css } from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons'
import { sHeight, sWidth } from '../../../constants/dimensions'

export const Container = styled.View`
  ${({ theme: { colors } }) => css`
    background: ${colors.backgroundColor};
    width: ${sWidth}px;
    align-items: center;
    border-radius: 24px;
    overflow: hidden;
    margin-top: 16px;
  `}
`

export const ImageView = styled.View`
  height: ${sHeight * 0.35}px;
  width: ${sWidth}px;
`

export const FoodImage = styled.Image.attrs({
  resizeMode: 'cover',
})`
  height: 100%;
  width: ${sWidth}px;
`

export const QuantityContainer = styled.View`
  position: absolute;
  bottom: 0;
  width: ${sWidth}px;
  align-items: center;
  justify-content: center;
  height: 48px;
  flex-direction: row;
`

export const MinusView = styled.View`
  ${({ theme: { colors } }) => css`
    background: ${colors.backgroundColor + '80'};
    width: 48px;
    height: 48px;
    align-items: center;
    justify-content: center;
    border-top-left-radius: 24px;
    border-bottom-left-radius: 24px;
    overflow: hidden;
  `}
`

export const MinusButton = styled(RectButton)`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`

export const MinusIcon = styled(Feather).attrs({
  name: 'minus',
  size: 28,
})`
  color: whitesmoke;
`

export const PlusView = styled.View`
  ${({ theme: { colors } }) => css`
    background: ${colors.backgroundColor + '80'};
    width: 48px;
    height: 48px;
    align-items: center;
    justify-content: center;
    border-top-right-radius: 24px;
    border-bottom-right-radius: 24px;
    overflow: hidden;
  `}
`

export const PlusButton = styled(RectButton)`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`

export const PlusIcon = styled(Feather).attrs({
  name: 'plus',
  size: 28,
})`
  color: whitesmoke;
`

export const QuantityView = styled.View`
  ${({ theme: { colors } }) => css`
    background: ${colors.backgroundColor + '80'};
    height: 48px;
    width: 48px;
    align-items: center;
    justify-content: center;
  `}
`

export const Quantity = styled.Text`
  color: whitesmoke;
  font-size: 16px;
`

export const Details = styled.View`
  width: ${sWidth}px;
  align-items: center;
  padding: 0 32px;
`

export const FoodName = styled.Text`
  margin: 8px 0;
  color: whitesmoke;
  font-size: 22px;
  line-height: 30px;
  font-weight: bold;
  text-align: center;
`
export const Description = styled.Text`
  color: whitesmoke;
  font-size: 16px;
  line-height: 22px;
`

export const CaloriesView = styled.View`
  flex-direction: row;
  margin-top: 8px;
  align-items: center;
`
export const CaloriesImage = styled.Image`
  width: 24px;
  height: 24px;
  margin-right: 8px;
`

export const Calories = styled.Text`
  ${({ theme: { colors } }) => css`
    color: ${colors.foodGrayDark};
    font-size: 16px;
    line-height: 22px;
  `}
`
