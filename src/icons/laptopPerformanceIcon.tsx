import React from 'react'
import { Icon, IconProps } from '../Icon'

export function laptopPerformanceIcon({ iconName = "laptop-performance", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}