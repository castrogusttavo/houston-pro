import React from 'react'
import { Icon, IconProps } from '../Icon'

export function notEqualSignSquareIcon({ iconName = "not-equal-sign-square", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}