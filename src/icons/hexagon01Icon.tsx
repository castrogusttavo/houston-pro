import React from 'react'
import { Icon, IconProps } from '../Icon'

export function hexagon01Icon({ iconName = "hexagon01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}