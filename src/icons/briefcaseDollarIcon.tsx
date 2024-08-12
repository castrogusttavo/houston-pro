import React from 'react'
import { Icon, IconProps } from '../Icon'

export function briefcaseDollarIcon({ iconName = "briefcase-dollar", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}