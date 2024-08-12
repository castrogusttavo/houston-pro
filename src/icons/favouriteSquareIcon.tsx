import React from 'react'
import { Icon, IconProps } from '../Icon'

export function favouriteSquareIcon({ iconName = "favourite-square", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}