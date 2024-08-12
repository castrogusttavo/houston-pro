import React from 'react'
import { Icon, IconProps } from '../Icon'

export function mouse20Icon({ iconName = "mouse20", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}