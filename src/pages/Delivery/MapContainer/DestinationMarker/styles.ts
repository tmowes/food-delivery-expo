import styled, { css } from 'styled-components/native'
import { icons } from '../../../../constants'

export const Container = styled.View`
  ${({ theme: { colors } }) => css`
    width: 36px;
    height: 36px;
    border-radius: 18px;
    align-items: center;
    justify-content: center;
  `}
`

export const Title = styled.Text`
  color: whitesmoke;
  font-size: 16px;
`

export const ImageView = styled.View`
  ${({ theme: { colors } }) => css`
    background: ${colors.foodPrimary};
    width: 28px;
    height: 28px;
    border-radius: 14px;
    align-items: center;
  `}
`

export const DestinationIcon = styled.Image.attrs({
  source: icons.pin,
  resizeMode: 'contain',
  tintColor: 'white',
})`
  width: 26px;
  height: 26px;
`
