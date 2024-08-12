import React from 'react'
import { Icon, IconProps } from '../Icon'

export function route01Icon({ iconName = "route01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}