import React from 'react'
import { Icon, IconProps } from '../Icon'

export function moonEclipseIcon({ iconName = "moon-eclipse", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}