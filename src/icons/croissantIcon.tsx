import React from 'react'
import { Icon, IconProps } from '../Icon'

export function croissantIcon({ iconName = "croissant", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}