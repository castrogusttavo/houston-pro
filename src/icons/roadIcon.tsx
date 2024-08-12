import React from 'react'
import { Icon, IconProps } from '../Icon'

export function roadIcon({ iconName = "road", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}