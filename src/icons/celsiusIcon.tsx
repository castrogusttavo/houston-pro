import React from 'react'
import { Icon, IconProps } from '../Icon'

export function celsiusIcon({ iconName = "celsius", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}