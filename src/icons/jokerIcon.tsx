import React from 'react'
import { Icon, IconProps } from '../Icon'

export function jokerIcon({ iconName = "joker", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}