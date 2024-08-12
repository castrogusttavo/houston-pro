import React from 'react'
import { Icon, IconProps } from '../Icon'

export function wifiNoSignalIcon({ iconName = "wifi-no-signal", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}