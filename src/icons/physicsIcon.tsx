import React from 'react'
import { Icon, IconProps } from '../Icon'

export function physicsIcon({ iconName = "physics", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}