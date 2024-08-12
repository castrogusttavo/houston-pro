import React from 'react'
import { Icon, IconProps } from '../Icon'

export function colorsIcon({ iconName = "colors", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}