import React from 'react'
import { Icon, IconProps } from '../Icon'

export function chartHistogramIcon({ iconName = "chart-histogram", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}