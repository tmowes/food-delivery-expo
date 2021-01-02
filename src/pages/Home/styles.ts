import styled, { css } from 'styled-components/native'

export const Container = styled.SafeAreaView`
  ${({ theme: { colors } }) => css`
    flex: 1;
    padding-top: 28px;
    background: ${colors.backgroundColor};
  `}
`

export const Title = styled.Text`
  color: whitesmoke;
  font-size: 32px;
`
