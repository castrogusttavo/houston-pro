import React from 'react'
import { Icon, IconProps } from '../Icon'

export function spiralsIcon({ iconName = "spirals", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}