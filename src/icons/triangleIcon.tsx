import React from 'react'
import { Icon, IconProps } from '../Icon'

export function triangleIcon({ iconName = "triangle", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}