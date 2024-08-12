import React from 'react'
import { Icon, IconProps } from '../Icon'

export function barnsIcon({ iconName = "barns", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}