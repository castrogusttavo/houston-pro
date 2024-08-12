import React from 'react'
import { Icon, IconProps } from '../Icon'

export function wifiConnected01Icon({ iconName = "wifi-connected01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}