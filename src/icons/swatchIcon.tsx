import React from 'react'
import { Icon, IconProps } from '../Icon'

export function swatchIcon({ iconName = "swatch", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}