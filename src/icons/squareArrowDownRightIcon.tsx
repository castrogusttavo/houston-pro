import React from 'react'
import { Icon, IconProps } from '../Icon'

export function squareArrowDownRightIcon({ iconName = "square-arrow-down-right", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}