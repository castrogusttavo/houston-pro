import React from 'react'
import { Icon, IconProps } from '../Icon'

export function targetDollarIcon({ iconName = "target-dollar", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}