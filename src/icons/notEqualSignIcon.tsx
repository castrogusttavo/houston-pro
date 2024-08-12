import React from 'react'
import { Icon, IconProps } from '../Icon'

export function notEqualSignIcon({ iconName = "not-equal-sign", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}