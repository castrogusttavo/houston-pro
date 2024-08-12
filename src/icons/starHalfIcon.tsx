import React from 'react'
import { Icon, IconProps } from '../Icon'

export function starHalfIcon({ iconName = "star-half", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}