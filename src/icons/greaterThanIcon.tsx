import React from 'react'
import { Icon, IconProps } from '../Icon'

export function greaterThanIcon({ iconName = "greater-than", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}