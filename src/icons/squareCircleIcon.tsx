import React from 'react'
import { Icon, IconProps } from '../Icon'

export function squareCircleIcon({ iconName = "square-circle", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}