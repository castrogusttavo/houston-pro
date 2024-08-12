import React from 'react'
import { Icon, IconProps } from '../Icon'

export function touch05Icon({ iconName = "touch05", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}