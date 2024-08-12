import React from 'react'
import { Icon, IconProps } from '../Icon'

export function starsIcon({ iconName = "stars", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}