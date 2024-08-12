import React from 'react'
import { Icon, IconProps } from '../Icon'

export function charityIcon({ iconName = "charity", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}