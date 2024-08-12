import React from 'react'
import { Icon, IconProps } from '../Icon'

export function wifiLocationIcon({ iconName = "wifi-location", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}