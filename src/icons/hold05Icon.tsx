import React from 'react'
import { Icon, IconProps } from '../Icon'

export function hold05Icon({ iconName = "hold05", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}