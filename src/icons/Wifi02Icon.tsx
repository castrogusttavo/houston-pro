import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Wifi02Icon({ iconName = "wifi02", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}