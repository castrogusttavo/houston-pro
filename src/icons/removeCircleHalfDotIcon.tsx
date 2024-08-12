import React from 'react'
import { Icon, IconProps } from '../Icon'

export function removeCircleHalfDotIcon({ iconName = "remove-circle-half-dot", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}