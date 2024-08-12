import React from 'react'
import { Icon, IconProps } from '../Icon'

export function gpsDisconnectedIcon({ iconName = "gps-disconnected", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}