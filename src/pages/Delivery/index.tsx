import React, { useEffect, useImperativeHandle, useRef, useState } from 'react'
import { useRoute } from '@react-navigation/native'
import { RestaurantProps } from '../../components/Restaurants/types'
import { RestaurantParams } from '../Restaurant/types'
import DeliveryInfo from './DeliveryInfo'
import DestinationHeader from './DestinationHeader'
import MapContainer from './MapContainer'

import * as S from './styles'
import { CoordsProps, RegionProps } from './types'

const Delivery: React.FC = () => {
  const { params } = useRoute()

  const [restaurant, setRestaurant] = useState({} as RestaurantProps)
  const [streetName, setStreetName] = useState('')

  const [region, setRegion] = useState({} as RegionProps)
  const [initialRegion, setInitialRegion] = useState({} as RegionProps)
  const [fromLocation, setFromLocation] = useState({} as CoordsProps)
  const [toLocation, setToLocation] = useState({} as CoordsProps)

  const [distance, setDistance] = useState(0)
  const [duration, setDuration] = useState(0)

  useEffect(() => {
    const { restaurant, currentLocation } = params as RestaurantParams
    const fromLoc = currentLocation.gps
    const toLoc = restaurant.location
    const street = currentLocation.streetName

    const mapRegion = {
      latitude: (fromLoc.latitude + toLoc.latitude) / 2,
      longitude: (fromLoc.longitude + toLoc.longitude) / 2,
      latitudeDelta: Math.abs(fromLoc.latitude - toLoc.latitude) * 2,
      longitudeDelta: Math.abs(fromLoc.longitude - toLoc.longitude) * 2,
    }

    setRestaurant(restaurant)
    setStreetName(street)
    setRegion(mapRegion)
    setFromLocation(fromLoc)
    setToLocation(toLoc)
    setInitialRegion(mapRegion)
  }, [])

  return (
    <S.Container>
      <MapContainer
        setRegion={setRegion}
        region={region}
        toLocation={toLocation}
        fromLocation={fromLocation}
        setFromLocation={setFromLocation}
        setDistance={setDistance}
        setDuration={setDuration}
        initialRegion={initialRegion}
      />
      <DestinationHeader
        streetName={streetName}
        distance={distance}
        duration={duration}
      />
      <DeliveryInfo restaurant={restaurant} />
    </S.Container>
  )
}

export default Delivery
