import { Feather } from '@expo/vector-icons'
import { RectButton } from 'react-native-gesture-handler'
import styled, { css } from 'styled-components/native'
import { sHeight } from '../../../../constants/dimensions'

export const Container = styled.View`
  position: absolute;
  bottom: ${sHeight * 0.24}px;
  right: 16px;
  align-items: center;
  justify-content: center;
`
export const SideView = styled.View`
  width: 48px;
  height: ${48 * 3 + 32}px;
  border-radius: 24px;
  align-items: center;
  justify-content: space-between;
`

export const PlusView = styled.View`
  ${({ theme: { colors } }) => css`
    width: 48px;
    height: 48px;
    border-radius: 24px;
    background: ${colors.foodWhiteIsh + 'F0'};
    align-items: center;
    justify-content: space-between;
    margin: auto;
    overflow: hidden;
  `}
`
export const MinusView = styled.View`
  ${({ theme: { colors } }) => css`
    width: 48px;
    height: 48px;
    border-radius: 24px;
    background: ${colors.foodWhiteIsh + 'F0'};
    align-items: center;
    justify-content: space-between;
    margin: auto;
    overflow: hidden;
  `}
`
export const FitView = styled.View`
  ${({ theme: { colors } }) => css`
    width: 48px;
    height: 48px;
    border-radius: 24px;
    background: ${colors.foodWhiteIsh + 'F0'};
    align-items: center;
    justify-content: space-between;
    margin: auto;
    overflow: hidden;
  `}
`
export const PlusButton = styled(RectButton)`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`
export const MinusButton = styled(RectButton)`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`
export const FitButton = styled(RectButton)`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`

export const PlusIcon = styled(Feather).attrs({
  name: 'plus',
  size: 28,
})`
  ${({ theme: { colors } }) => css`
    color: ${colors.foodGrayDark};
  `}
`
export const MinusIcon = styled(Feather).attrs({
  name: 'minus',
  size: 28,
})`
  ${({ theme: { colors } }) => css`
    color: ${colors.foodGrayDark};
  `}
`
export const FitIcon = styled(Feather).attrs({
  name: 'maximize',
  size: 28,
})`
  ${({ theme: { colors } }) => css`
    color: ${colors.foodGrayDark};
  `}
`
