import React from 'react'
import { Icon, IconProps } from '../Icon'

export function mehIcon({ iconName = "meh", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}