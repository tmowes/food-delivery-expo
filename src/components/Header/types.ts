export type HeaderProps = {
  centerLabel: string
  left: any
  leftPress: () => void
  right: any
  rightPress: () => void
}

export type LocationProps = {
  streetName: string
  gps: {
    latitude: number
    longitude: number
  }
}
