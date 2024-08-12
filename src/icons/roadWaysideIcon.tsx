import React from 'react'
import { Icon, IconProps } from '../Icon'

export function roadWaysideIcon({ iconName = "road-wayside", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}