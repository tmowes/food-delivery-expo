import React, { useRef, useState } from 'react'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import MapViewDirections from 'react-native-maps-directions'
import { useTheme } from 'styled-components/native'

import { GOOGLE_DIRECTIONS_KEY } from '../../../secrets'
import { calculateAngle } from '../../../utils'

import CarMarker from './CarMarker'
import DestinationMarker from './DestinationMarker'
import MapZoomControl from './MapZoomControl'

import * as S from './styles'
import { DirectionsProps, MapContainerProps } from './types'

const MapContainer = (props: MapContainerProps) => {
  const {
    region,
    initialRegion,
    toLocation,
    fromLocation,
    setFromLocation,
    setDistance,
    setDuration,
    setRegion,
  } = props
  const { colors } = useTheme()
  const map = useRef<MapView>(null)

  const [isReady, setIsReady] = useState(false)
  const [angle, setAngle] = useState(0)

  const onReady = ({ duration, coordinates, distance }: DirectionsProps) => {
    setDuration(duration)
    setDistance(distance)

    if (!isReady) {
      if (map.current === null) {
        return
      }
      map.current.fitToCoordinates(coordinates)
      let nextLocation = {
        latitude: coordinates[0]['latitude'],
        longitude: coordinates[0]['longitude'],
      }
      if (coordinates.length >= 2) {
        setAngle(calculateAngle(coordinates))
      }
      setFromLocation(nextLocation)
      setIsReady(true)
    }
  }

  const zoomMap = (action: string) => {
    if (action === '+') {
      const zoomOutRegion = {
        latitude: region.latitude,
        longitude: region.longitude,
        latitudeDelta: region.latitudeDelta / 2,
        longitudeDelta: region.longitudeDelta / 2,
      }
      setRegion(zoomOutRegion)
      map.current?.animateToRegion(zoomOutRegion, 100)
    } else if (action === '-') {
      const zoomInRegion = {
        latitude: region.latitude,
        longitude: region.longitude,
        latitudeDelta: region.latitudeDelta * 2,
        longitudeDelta: region.longitudeDelta * 2,
      }
      setRegion(zoomInRegion)
      map.current?.animateToRegion(zoomInRegion, 100)
    } else if (action === '#') {
      setIsReady(false)
      setRegion(initialRegion)
      map.current?.animateToRegion(initialRegion, 100)
    } else {
      return
    }
  }

  return (
    <S.Container>
      {region.latitude && (
        <MapView
          ref={map}
          provider={PROVIDER_GOOGLE}
          style={{ flex: 1 }}
          region={region}
          onRegionChangeComplete={region => setRegion(region)}
        >
          <MapViewDirections
            apikey={GOOGLE_DIRECTIONS_KEY}
            strokeWidth={4}
            strokeColor={colors.foodPrimary}
            origin={fromLocation}
            destination={toLocation}
            optimizeWaypoints
            onReady={result => onReady(result)}
          />
          <DestinationMarker coordinate={toLocation} />
          <CarMarker coordinate={fromLocation} angle={angle} />
        </MapView>
      )}
      <MapZoomControl zoomMap={zoomMap} />
    </S.Container>
  )
}

export default MapContainer
