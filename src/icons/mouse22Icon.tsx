import React from 'react'
import { Icon, IconProps } from '../Icon'

export function mouse22Icon({ iconName = "mouse22", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}