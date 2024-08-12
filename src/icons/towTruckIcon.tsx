import React from 'react'
import { Icon, IconProps } from '../Icon'

export function towTruckIcon({ iconName = "tow-truck", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}