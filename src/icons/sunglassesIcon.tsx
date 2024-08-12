import React from 'react'
import { Icon, IconProps } from '../Icon'

export function sunglassesIcon({ iconName = "sunglasses", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}