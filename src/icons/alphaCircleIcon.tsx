import React from 'react'
import { Icon, IconProps } from '../Icon'

export function alphaCircleIcon({ iconName = "alpha-circle", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}