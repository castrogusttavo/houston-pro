import React from 'react'
import { Icon, IconProps } from '../Icon'

export function tvFixIcon({ iconName = "tv-fix", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}