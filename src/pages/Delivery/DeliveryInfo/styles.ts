import { RectButton } from 'react-native-gesture-handler'
import styled, { css } from 'styled-components/native'
import { icons } from '../../../constants'
import { sWidth } from '../../../constants/dimensions'

export const Container = styled.View`
  position: absolute;
  bottom: 32px;
  left: 0;
  right: 0;
  align-items: center;
  justify-content: center;
`
export const FooterView = styled.View`
  ${({ theme: { colors } }) => css`
    width: ${sWidth - 32}px;
    padding: 16px;
    border-radius: 24px;
    background: ${colors.foodWhiteIsh + 'F0'};
    align-items: center;
    justify-content: space-between;
  `}
`

export const FlexRow = styled.View`
  flex-direction: row;
  align-items: center;
`

export const Avatar = styled.Image`
  width: 48px;
  height: 48px;
  border-radius: 24px;
`

export const Flex = styled.View`
  flex: 1;
  margin-left: 8px;
`

export const NameView = styled.View`
  flex-direction: row;
  justify-content: space-between;
`
export const Name = styled.Text`
  ${({ theme: { colors } }) => css`
    color: ${colors.foodPrimary};
    font-size: 20px;
    font-weight: bold;
  `}
`
export const RatingView = styled.View`
  flex-direction: row;
  justify-content: space-between;
`

export const StarIcon = styled.Image.attrs({
  source: icons.star,

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
  font-size: 16px;
`
export const Restaurant = styled.Text`
  ${({ theme: { colors } }) => css`
    color: ${colors.foodGrayDark};
    font-size: 16px;
  `}
`

export const ButtonsView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 48px;
  margin: 16px auto 0;
`
export const CallView = styled.View`
  ${({ theme: { colors } }) => css`
    background: ${colors.foodPrimary};
    width: ${sWidth / 2.6}px;
    margin: 0 auto;
    border-radius: 16px;
    overflow: hidden;
  `}
`
export const CancelView = styled.View`
  ${({ theme: { colors } }) => css`
    background: ${colors.foodGrayDark};
    width: ${sWidth / 2.6}px;
    margin: 0 auto;
    border-radius: 16px;
    overflow: hidden;
  `}
`
export const CallButton = styled(RectButton)`
  flex: 1;
  align-items: center;
  justify-content: center;
`
export const CancelButton = styled(RectButton)`
  flex: 1;
  align-items: center;
  justify-content: center;
`

export const Call = styled.Text`
  ${({ theme: { colors } }) => css`
    color: ${colors.foodWhiteLighter};
    font-size: 16px;
    font-weight: bold;
  `}
`

export const Cancel = styled.Text`
  ${({ theme: { colors } }) => css`
    color: ${colors.foodWhiteLighter};
    font-size: 16px;
    font-weight: bold;
  `}
`
