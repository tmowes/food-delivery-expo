import { Dispatch, SetStateAction } from 'react'
import { CoordsProps, RegionProps } from '../types'

export type MapContainerProps = {
  region: RegionProps
  initialRegion: RegionProps
  toLocation: CoordsProps
  fromLocation: CoordsProps
  setFromLocation: Dispatch<SetStateAction<CoordsProps>>
  setDistance: Dispatch<SetStateAction<number>>
  setDuration: Dispatch<SetStateAction<number>>
  setRegion: Dispatch<SetStateAction<RegionProps>>
}

export type DirectionsProps = {
  coordinates: CoordsProps[]
  distance: number
  duration: number
}

export type DirectionFitProps = {
  coordinates: CoordsProps[]
  edgePadding: {
    right: number
    bottom: number
    left: number
    top: number
  }
}
