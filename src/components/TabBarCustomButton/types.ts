import { ReactNode } from 'react'
import { AccessibilityState, GestureResponderEvent } from 'react-native'

export interface TabBarCustomButtonProps {
  accessibilityState?: AccessibilityState | undefined
  children: ReactNode
  onPress?: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent> | GestureResponderEvent) => void
}
