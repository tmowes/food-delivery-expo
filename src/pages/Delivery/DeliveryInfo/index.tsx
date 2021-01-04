import { useNavigation } from '@react-navigation/native'
import React from 'react'

import * as S from './styles'
import { DeliveryInfoProps } from './types'

const DeliveryInfo = ({ restaurant }: DeliveryInfoProps) => {
  const { rating, courier, name } = restaurant
  const { navigate, goBack } = useNavigation()
  return (
    <S.Container>
      {rating && (
        <S.FooterView style={{ elevation: 8 }}>
          <S.FlexRow>
            <S.Avatar source={courier.avatar} />
            <S.Flex>
              <S.NameView>
                <S.Name>{courier.name}</S.Name>
                <S.RatingView>
                  <S.StarIcon />
                  <S.Rating>{rating}</S.Rating>
                </S.RatingView>
              </S.NameView>
              <S.Restaurant>{name}</S.Restaurant>
            </S.Flex>
          </S.FlexRow>
          <S.ButtonsView>
            <S.CallView>
              <S.CallButton onPress={() => navigate('Home')}>
                <S.Call>Call</S.Call>
              </S.CallButton>
            </S.CallView>
            <S.CancelView>
              <S.CancelButton onPress={() => goBack()}>
                <S.Cancel>Cancel</S.Cancel>
              </S.CancelButton>
            </S.CancelView>
          </S.ButtonsView>
        </S.FooterView>
      )}
    </S.Container>
  )
}

export default DeliveryInfo
