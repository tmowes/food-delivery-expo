import { BorderlessButton } from 'react-native-gesture-handler'
import styled, { css } from 'styled-components/native'
import { icons } from '../../constants'
import { sWidth } from '../../constants/dimensions'

export const Container = styled.View`
  ${({ theme: { colors } }) => css`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: ${sWidth}px;
    height: 48px;
    background: ${colors.backgroundColor};
  `}
`

export const LeftView = styled.View`
  ${({ theme: { colors } }) => css`
    width: 64px;
    height: 100%;
    justify-content: center;
    overflow: hidden;
    border-top-right-radius: 24px;
    border-bottom-right-radius: 24px;
    background: ${colors.foodGrayLight};
  `}
`

export const LeftButton = styled(BorderlessButton)`
  width: 64px;
  align-items: center;
  justify-content: center;
`

export const LeftIcon = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: 30px;
  height: 30px;
`

export const RightView = styled.View`
  ${({ theme: { colors } }) => css`
    width: 64px;
    height: 100%;
    justify-content: center;
    background: ${colors.foodGrayLight};
    border-top-left-radius: 24px;
    border-bottom-left-radius: 24px;
    overflow: hidden;
  `}
`

export const RightButton = styled(BorderlessButton)`
  width: 64px;
  align-items: center;
  justify-content: center;
`

export const RightIcon = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: 30px;
  height: 30px;
`
export const CenterView = styled.View`
  ${({ theme: { colors } }) => css`
    width: 60%;
    height: 100%;
    align-items: center;
    justify-content: center;
    background: ${colors.foodGrayLight};
    border-radius: 24px;
    overflow: hidden;
  `}
`

export const Title = styled.Text`
  font-size: 16px;
  font-weight: bold;
`
