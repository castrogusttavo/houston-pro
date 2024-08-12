import React from 'react'
import { Icon, IconProps } from '../Icon'

export function saturnIcon({ iconName = "saturn", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}