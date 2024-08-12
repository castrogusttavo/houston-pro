import React from 'react'
import { Icon, IconProps } from '../Icon'

export function fireIcon({ iconName = "fire", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}