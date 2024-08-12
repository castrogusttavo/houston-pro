import React from 'react'
import { Icon, IconProps } from '../Icon'

export function strokeInsideIcon({ iconName = "stroke-inside", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}