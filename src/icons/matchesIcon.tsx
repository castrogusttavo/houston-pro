import React from 'react'
import { Icon, IconProps } from '../Icon'

export function matchesIcon({ iconName = "matches", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}