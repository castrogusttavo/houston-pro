import React from 'react'
import { Icon, IconProps } from '../Icon'

export function flowIcon({ iconName = "flow", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}