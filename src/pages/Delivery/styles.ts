import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  ${({ theme: { colors } }) => css`
    flex: 1;
    align-items: center;
    justify-content: center;
    background: ${colors.backgroundColor};
  `}
`

export const Title = styled.Text`
  color: whitesmoke;
  font-size: 32px;
`
