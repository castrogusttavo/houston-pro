import React from 'react'
import { Icon, IconProps } from '../Icon'

export function wifiCircleIcon({ iconName = "wifi-circle", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}