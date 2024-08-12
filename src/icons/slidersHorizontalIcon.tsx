import React from 'react'
import { Icon, IconProps } from '../Icon'

export function slidersHorizontalIcon({ iconName = "sliders-horizontal", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}