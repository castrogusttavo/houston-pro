import React from 'react'
import { Icon, IconProps } from '../Icon'

export function wifiFullSignalIcon({ iconName = "wifi-full-signal", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}