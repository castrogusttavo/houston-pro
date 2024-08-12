import React from 'react'
import { Icon, IconProps } from '../Icon'

export function kissingIcon({ iconName = "kissing", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}