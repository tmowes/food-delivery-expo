import { Pressable } from 'react-native'
import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  align-items: center;
`

export const Row = styled.View`
  flex-direction: row;
  position: absolute;
  top: 0;
`

export const Flex = styled.View`
  ${({ theme: { colors } }) => css`
    flex: 1;
    background: ${colors.background};
  `}
`

export const TabButton = styled(Pressable)`
  ${({ theme: { colors } }) => css`
    flex: 1;
    height: 60px;
    background: ${colors.background};
  `}
`

export const TabButtonActive = styled(Pressable)`
  ${({ theme: { colors } }) => css`
    background: ${colors.background};
    top: -22.5px;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    border-radius: 25px;
  `}
`

export const Title = styled.Text`
  color: whitesmoke;
  font-size: 32px;
`
