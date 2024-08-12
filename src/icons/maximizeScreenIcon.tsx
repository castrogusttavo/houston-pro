import React from 'react'
import { Icon, IconProps } from '../Icon'

export function maximizeScreenIcon({ iconName = "maximize-screen", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}