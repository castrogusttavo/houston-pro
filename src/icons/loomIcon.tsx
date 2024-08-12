import React from 'react'
import { Icon, IconProps } from '../Icon'

export function loomIcon({ iconName = "loom", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}