import React from 'react'
import { Icon, IconProps } from '../Icon'

export function cProgrammingIcon({ iconName = "c-programming", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}