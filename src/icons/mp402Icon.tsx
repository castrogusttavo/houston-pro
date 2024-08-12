import React from 'react'
import { Icon, IconProps } from '../Icon'

export function mp402Icon({ iconName = "mp402", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}