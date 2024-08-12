import React from 'react'
import { Icon, IconProps } from '../Icon'

export function mouse21Icon({ iconName = "mouse21", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}