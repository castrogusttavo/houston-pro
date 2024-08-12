import React from 'react'
import { Icon, IconProps } from '../Icon'

export function jarIcon({ iconName = "jar", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}