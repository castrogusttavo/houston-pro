import React from 'react'
import { Icon, IconProps } from '../Icon'

export function favouriteCircleIcon({ iconName = "favourite-circle", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}