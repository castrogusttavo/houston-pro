import React from 'react'
import { Icon, IconProps } from '../Icon'

export function earthIcon({ iconName = "earth", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}