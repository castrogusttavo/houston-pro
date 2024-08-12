import React from 'react'
import { Icon, IconProps } from '../Icon'

export function fencingIcon({ iconName = "fencing", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}