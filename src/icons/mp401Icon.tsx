import React from 'react'
import { Icon, IconProps } from '../Icon'

export function mp401Icon({ iconName = "mp401", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}