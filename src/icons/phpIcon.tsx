import React from 'react'
import { Icon, IconProps } from '../Icon'

export function phpIcon({ iconName = "php", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}