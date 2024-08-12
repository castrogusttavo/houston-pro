import React from 'react'
import { Icon, IconProps } from '../Icon'

export function wifiDisconnected01Icon({ iconName = "wifi-disconnected01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}