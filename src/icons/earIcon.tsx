import React from 'react'
import { Icon, IconProps } from '../Icon'

export function earIcon({ iconName = "ear", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}