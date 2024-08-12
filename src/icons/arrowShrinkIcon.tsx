import React from 'react'
import { Icon, IconProps } from '../Icon'

export function arrowShrinkIcon({ iconName = "arrow-shrink", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}