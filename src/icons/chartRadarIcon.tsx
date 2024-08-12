import React from 'react'
import { Icon, IconProps } from '../Icon'

export function chartRadarIcon({ iconName = "chart-radar", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}