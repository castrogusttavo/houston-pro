import React from 'react'
import { Icon, IconProps } from '../Icon'

export function wifiSquareIcon({ iconName = "wifi-square", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}