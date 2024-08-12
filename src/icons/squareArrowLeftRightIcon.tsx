import React from 'react'
import { Icon, IconProps } from '../Icon'

export function squareArrowLeftRightIcon({ iconName = "square-arrow-left-right", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}