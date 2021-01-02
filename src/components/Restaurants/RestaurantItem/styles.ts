import { RectButton } from 'react-native-gesture-handler'
import styled, { css } from 'styled-components/native'
import { PriceRatingStyle } from './types'

export const Container = styled.View`
  ${({ theme: { colors } }) => css`
    /* background: ${colors.foodPrimary}; */
    padding-bottom: 16px;
  `}
`

export const Button = styled(RectButton)``

export const ImageView = styled.View`
  overflow: hidden;
  border-radius: 24px;
  margin-bottom: 8px;
`

export const Image = styled.Image.attrs({
  resizeMode: 'cover',
})`
  width: 100%;
  height: 192px;
`

export const Title = styled.Text`
  color: whitesmoke;
  font-size: 20px;
`

export const TimeView = styled.View`
  ${({ theme: { colors } }) => css`
    background: ${colors.backgroundColor};
    width: 30%;
    height: 48px;
    border-top-right-radius: 24px;
    border-bottom-left-radius: 24px;
    position: absolute;
    bottom: 0;
    align-items: center;
    justify-content: center;
  `}
`

export const TimeLabel = styled.Text`
  color: whitesmoke;
  font-weight: bold;
  font-size: 16px;
`

export const DetailsView = styled.View`
  flex-direction: row;
  margin-top: 8px;
  align-items: center;
`

export const StarIcon = styled.Image.attrs({
  resizeMode: 'cover',
})`
  ${({ theme: { colors } }) => css`
    width: 18px;
    height: 18px;
    tint-color: ${colors.foodPrimary};
    margin-right: 8px;
  `}
`
export const Rating = styled.Text`
  color: whitesmoke;
  font-size: 14px;
  margin-right: 8px;
`

export const PriceRating = styled.Text<PriceRatingStyle>`
  ${({ theme: { colors } }) => css`
    color: ${colors.foodGrayDark};
    font-size: 16px;
  `}
  ${({ isExpensive, theme: { colors } }) =>
    isExpensive &&
    css`
      color: ${colors.foodPrimary};
    `}
`
