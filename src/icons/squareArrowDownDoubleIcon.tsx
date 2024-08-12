import React from 'react'
import { Icon, IconProps } from '../Icon'

export function squareArrowDownDoubleIcon({ iconName = "square-arrow-down-double", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}