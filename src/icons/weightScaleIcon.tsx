import React from 'react'
import { Icon, IconProps } from '../Icon'

export function weightScaleIcon({ iconName = "weight-scale", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}