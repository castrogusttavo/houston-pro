import React from 'react'
import { Icon, IconProps } from '../Icon'

export function sadDizzyIcon({ iconName = "sad-dizzy", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}