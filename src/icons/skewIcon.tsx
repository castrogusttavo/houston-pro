import React from 'react'
import { Icon, IconProps } from '../Icon'

export function skewIcon({ iconName = "skew", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}