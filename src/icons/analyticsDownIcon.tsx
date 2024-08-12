import React from 'react'
import { Icon, IconProps } from '../Icon'

export function analyticsDownIcon({ iconName = "analytics-down", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}