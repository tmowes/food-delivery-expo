import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Routes from './routes'
import styled, { css, ThemeProvider } from 'styled-components/native'
import * as themes from './styles/themes'

const AppWrapper = styled.View`
  ${({ theme: { colors } }) => css`
    flex: 1;
    background: ${colors.foodPrimary};
  `}
`

const App: React.FC = () => {
  return (
    <ThemeProvider theme={themes.dark}>
      <NavigationContainer>
        <AppWrapper>
          <Routes />
        </AppWrapper>
      </NavigationContainer>
    </ThemeProvider>
  )
}

export default App
