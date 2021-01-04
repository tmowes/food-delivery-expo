import styled, { css } from 'styled-components/native'
import { icons } from '../../../constants'
import { sWidth } from '../../../constants/dimensions'

export const Container = styled.View`
  position: absolute;
  top: 48px;
  left: 0;
  right: 0;
  align-items: center;
  justify-content: center;
`
export const HeaderView = styled.View`
  ${({ theme: { colors } }) => css`
    flex-direction: row;
    width: ${sWidth - 32}px;
    height: 48px;
    padding: 8px 16px;
    border-radius: 24px;
    background: ${colors.foodWhiteIsh + 'F0'};
    align-items: center;
    justify-content: space-between;
  `}
`

export const Street = styled.Text`
  ${({ theme: { colors } }) => css`
    color: ${colors.foodPrimary};
    font-size: 20px;
    font-weight: bold;
  `}
`
export const Distance = styled.Text`
  ${({ theme: { colors } }) => css`
    color: ${colors.foodPrimary};
    font-size: 16px;
  `}
`
export const Duration = styled.Text`
  ${({ theme: { colors } }) => css`
    color: ${colors.foodPrimary};
    font-size: 16px;
  `}
`

export const PinIcon = styled.Image.attrs({
  source: icons.red_pin,
  resizeMode: 'contain',
})`
  width: 24px;
  height: 24px;
`

export const CenterView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`
