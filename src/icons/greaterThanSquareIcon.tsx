import React from 'react'
import { Icon, IconProps } from '../Icon'

export function greaterThanSquareIcon({ iconName = "greater-than-square", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}