import React from 'react'
import { Icon, IconProps } from '../Icon'

export function spatulaIcon({ iconName = "spatula", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}