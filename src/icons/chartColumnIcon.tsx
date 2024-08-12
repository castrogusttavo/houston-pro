import React from 'react'
import { Icon, IconProps } from '../Icon'

export function chartColumnIcon({ iconName = "chart-column", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}