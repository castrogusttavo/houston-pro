import React from 'react'
import { Icon, IconProps } from '../Icon'

export function chimneyIcon({ iconName = "chimney", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}