import React from 'react'
import { Icon, IconProps } from '../Icon'

export function mouse15Icon({ iconName = "mouse15", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}