import React from 'react'
import { Icon, IconProps } from '../Icon'

export function homeWifiIcon({ iconName = "home-wifi", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}