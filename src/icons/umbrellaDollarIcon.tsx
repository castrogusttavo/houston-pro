import React from 'react'
import { Icon, IconProps } from '../Icon'

export function umbrellaDollarIcon({ iconName = "umbrella-dollar", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}