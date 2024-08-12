import React from 'react'
import { Icon, IconProps } from '../Icon'

export function chartIncreaseIcon({ iconName = "chart-increase", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}