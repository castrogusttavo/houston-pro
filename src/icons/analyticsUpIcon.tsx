import React from 'react'
import { Icon, IconProps } from '../Icon'

export function analyticsUpIcon({ iconName = "analytics-up", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}