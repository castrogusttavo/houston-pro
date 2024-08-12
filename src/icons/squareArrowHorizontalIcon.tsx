import React from 'react'
import { Icon, IconProps } from '../Icon'

export function squareArrowHorizontalIcon({ iconName = "square-arrow-horizontal", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}