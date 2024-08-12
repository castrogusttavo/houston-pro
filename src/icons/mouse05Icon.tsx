import React from 'react'
import { Icon, IconProps } from '../Icon'

export function mouse05Icon({ iconName = "mouse05", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}