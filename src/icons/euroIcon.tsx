import React from 'react'
import { Icon, IconProps } from '../Icon'

export function euroIcon({ iconName = "euro", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}