import React from 'react'
import { Icon, IconProps } from '../Icon'

export function greaterThanCircleIcon({ iconName = "greater-than-circle", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}