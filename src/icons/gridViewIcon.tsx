import React from 'react'
import { Icon, IconProps } from '../Icon'

export function gridViewIcon({ iconName = "grid-view", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}