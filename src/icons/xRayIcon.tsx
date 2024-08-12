import React from 'react'
import { Icon, IconProps } from '../Icon'

export function xRayIcon({ iconName = "x-ray", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}