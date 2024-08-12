import React from 'react'
import { Icon, IconProps } from '../Icon'

export function poundCircleIcon({ iconName = "pound-circle", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}