import React from 'react'
import { Icon, IconProps } from '../Icon'

export function truckIcon({ iconName = "truck", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}