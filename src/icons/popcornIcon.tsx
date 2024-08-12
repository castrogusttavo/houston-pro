import React from 'react'
import { Icon, IconProps } from '../Icon'

export function popcornIcon({ iconName = "popcorn", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}