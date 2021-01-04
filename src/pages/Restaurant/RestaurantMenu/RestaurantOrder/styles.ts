import { RectButton } from 'react-native-gesture-handler'
import styled, { css } from 'styled-components/native'
import { icons } from '../../../../constants'

export const Container = styled.View`
  ${({ theme: { colors } }) => css`
    flex: 1;
    background: ${colors.foodGrayLight};
    border-top-left-radius: 32px;
    border-top-right-radius: 32px;
    padding: 16px;
    justify-content: space-around;
  `}
`

export const OrderView = styled.View`
  ${({ theme: { colors } }) => css`
    flex-direction: row;
    justify-content: space-between;
    padding: 4px 0;
    border-bottom-width: 1px;
    border-bottom-color: ${colors.foodBlack + '20'};
  `}
`

export const Title = styled.Text`
  font-size: 16px;
  font-weight: bold;
`

export const PaymentView = styled.View`
  ${({ theme: { colors } }) => css`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 4px 0;
    border-bottom-width: 1px;
    border-bottom-color: ${colors.foodBlack + '20'};
  `}
`

export const SubTitle = styled.Text`
  font-size: 14px;
  font-weight: bold;
`

export const LocationView = styled.View`
  flex-direction: row;
`

export const LocationIcon = styled.Image.attrs({
  source: icons.pin,
  resizeMode: 'contain',
  tintColor: 'gray',
})`
  width: 20px;
  height: 20px;
  margin-right: 8px;
`

export const PaymentMethod = styled.View`
  flex-direction: row;
`

export const PaymentIcon = styled.Image.attrs({
  source: icons.master_card,
  resizeMode: 'contain',
  tintColor: 'gray',
})`
  width: 24px;
  height: 24px;
  margin-right: 8px;
`

export const CheckoutView = styled.View`
  width: 80%;
  height: 48px;
  margin: 0 auto;
  border-radius: 8px;
  overflow: hidden;
`

export const CheckoutButton = styled(RectButton)`
  ${({ theme: { colors } }) => css`
    background: ${colors.foodPrimary};
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
  `}
`

export const CheckoutButtonText = styled.Text`
  ${({ theme: { colors } }) => css`
    color: ${colors.foodWhiteLighter};
    font-size: 20px;
    font-weight: bold;
  `}
`
