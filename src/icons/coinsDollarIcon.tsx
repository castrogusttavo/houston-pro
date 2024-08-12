import React from 'react'
import { Icon, IconProps } from '../Icon'

export function coinsDollarIcon({ iconName = "coins-dollar", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}