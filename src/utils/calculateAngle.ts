import { CoordsProps } from '../pages/Delivery/types'

const calculateAngle = (coordinates: CoordsProps[]) => {
  let startLat = coordinates[0]['latitude']
  let startLng = coordinates[0]['longitude']
  let endLat = coordinates[1]['latitude']
  let endLng = coordinates[1]['longitude']
  let dx = endLat - startLat
  let dy = endLng - startLng

  return (Math.atan2(dy, dx) * 180) / Math.PI
}

export default calculateAngle
