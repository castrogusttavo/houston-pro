import React from 'react'
import { Icon, IconProps } from '../Icon'

export function hexagonIcon({ iconName = "hexagon", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}