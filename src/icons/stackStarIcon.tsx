import React from 'react'
import { Icon, IconProps } from '../Icon'

export function stackStarIcon({ iconName = "stack-star", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}