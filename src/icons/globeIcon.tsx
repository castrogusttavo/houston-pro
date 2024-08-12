import React from 'react'
import { Icon, IconProps } from '../Icon'

export function globeIcon({ iconName = "globe", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}