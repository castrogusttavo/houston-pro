import React from 'react'
import { Icon, IconProps } from '../Icon'

export function tinderIcon({ iconName = "tinder", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}