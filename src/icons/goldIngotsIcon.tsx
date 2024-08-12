import React from 'react'
import { Icon, IconProps } from '../Icon'

export function goldIngotsIcon({ iconName = "gold-ingots", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}