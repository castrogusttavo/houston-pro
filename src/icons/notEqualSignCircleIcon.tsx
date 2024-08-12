import React from 'react'
import { Icon, IconProps } from '../Icon'

export function notEqualSignCircleIcon({ iconName = "not-equal-sign-circle", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}