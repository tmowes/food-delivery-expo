import { RectButton } from 'react-native-gesture-handler'
import styled, { css } from 'styled-components/native'
import { sWidth } from '../../../constants/dimensions'
import { SelectedStyle } from './types'

const itemWidth = sWidth / 6
const borderRadius = itemWidth / 2

export const Container = styled.View<SelectedStyle>`
  ${({ theme: { colors } }) => css`
    width: ${itemWidth}px;
    overflow: hidden;
    align-items: center;
    background: ${colors.background};
    border-radius: ${borderRadius}px;
    margin: 8px;
  `}
  ${({ isSelectedCategory, theme: { colors } }) =>
    isSelectedCategory &&
    css`
      background: ${colors.foodPrimary};
    `}
`

export const Button = styled(RectButton)`
  flex: 1;
  align-items: center;
  width: 100%;
`

export const Icon = styled.Image`
  width: 32px;
  height: 32px;
`

export const IconView = styled.View<SelectedStyle>`
  ${({ theme: { colors } }) => css`
    padding: 8px;
    background: ${colors.foodGrayLight};
    border-radius: ${borderRadius}px;
    margin: 8px;
  `}
  ${({ isSelectedCategory, theme: { colors } }) =>
    isSelectedCategory &&
    css`
      background: ${colors.white};
    `}
`

export const Title = styled.Text<SelectedStyle>`
  ${({ theme: { colors } }) => css`
    color: ${colors.foodGrayLight};
  `}
  ${({ isSelectedCategory, theme: { colors } }) =>
    isSelectedCategory &&
    css`
      color: ${colors.white};
      font-weight: bold;
    `}
`
