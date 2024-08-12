import React from 'react'
import { Icon, IconProps } from '../Icon'

export function mouse12Icon({ iconName = "mouse12", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}