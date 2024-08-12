import React from 'react'
import { Icon, IconProps } from '../Icon'

export function squareArrowLeftDoubleIcon({ iconName = "square-arrow-left-double", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}