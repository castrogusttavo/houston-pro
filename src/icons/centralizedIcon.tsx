import React from 'react'
import { Icon, IconProps } from '../Icon'

export function centralizedIcon({ iconName = "centralized", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}