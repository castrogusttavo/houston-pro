import React from 'react'
import { Icon, IconProps } from '../Icon'

export function hold04Icon({ iconName = "hold04", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}