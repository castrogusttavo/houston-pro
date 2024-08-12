import React from 'react'
import { Icon, IconProps } from '../Icon'

export function shaka04Icon({ iconName = "shaka04", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}