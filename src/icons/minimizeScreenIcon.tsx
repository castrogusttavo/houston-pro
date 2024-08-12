import React from 'react'
import { Icon, IconProps } from '../Icon'

export function minimizeScreenIcon({ iconName = "minimize-screen", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}