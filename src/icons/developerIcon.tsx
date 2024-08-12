import React from 'react'
import { Icon, IconProps } from '../Icon'

export function developerIcon({ iconName = "developer", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}