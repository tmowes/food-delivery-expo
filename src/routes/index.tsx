import React, { useState, useEffect } from 'react'
import { View, ActivityIndicator } from 'react-native'

import AppRoutes from './app.routes'

const Routes: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 200)
  }, [])

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#999" />
      </View>
    )
  }

  return <AppRoutes />
}

export default Routes
