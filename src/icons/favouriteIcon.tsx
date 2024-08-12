import React from 'react'
import { Icon, IconProps } from '../Icon'

export function favouriteIcon({ iconName = "favourite", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}