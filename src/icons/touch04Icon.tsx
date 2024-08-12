import React from 'react'
import { Icon, IconProps } from '../Icon'

export function touch04Icon({ iconName = "touch04", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}