import React from 'react'
import { Icon, IconProps } from '../Icon'

export function garbageTruckIcon({ iconName = "garbage-truck", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}