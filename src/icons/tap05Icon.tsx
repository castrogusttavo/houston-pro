import React from 'react'
import { Icon, IconProps } from '../Icon'

export function tap05Icon({ iconName = "tap05", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}