import React from 'react'
import { Icon, IconProps } from '../Icon'

export function wifiError01Icon({ iconName = "wifi-error01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}