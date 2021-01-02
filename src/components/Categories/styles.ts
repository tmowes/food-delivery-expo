import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  /* margin-top: 128px; */
  margin-top: 16px;
  height: 192px;
`
export const Title = styled.Text`
  ${({ theme: { colors } }) => css`
    color: ${colors.foodGrayLight};
    font-size: 30px;
    font-weight: bold;
    margin-left: 16px;
  `}
`
