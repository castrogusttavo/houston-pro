import React from 'react'
import { Icon, IconProps } from '../Icon'

export function prismIcon({ iconName = "prism", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}