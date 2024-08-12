import React from 'react'
import { Icon, IconProps } from '../Icon'

export function gravityIcon({ iconName = "gravity", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}