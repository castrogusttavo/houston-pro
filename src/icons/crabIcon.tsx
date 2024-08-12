import React from 'react'
import { Icon, IconProps } from '../Icon'

export function crabIcon({ iconName = "crab", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}