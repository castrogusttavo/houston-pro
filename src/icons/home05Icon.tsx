import React from 'react'
import { Icon, IconProps } from '../Icon'

export function home05Icon({ iconName = "home05", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}