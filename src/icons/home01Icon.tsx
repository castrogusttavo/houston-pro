import React from 'react'
import { Icon, IconProps } from '../Icon'

export function home01Icon({ iconName = "home01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}