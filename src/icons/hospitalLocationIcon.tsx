import React from 'react'
import { Icon, IconProps } from '../Icon'

export function hospitalLocationIcon({ iconName = "hospital-location", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}