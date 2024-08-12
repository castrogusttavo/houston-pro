import React from 'react'
import { Icon, IconProps } from '../Icon'

export function globalIcon({ iconName = "global", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}