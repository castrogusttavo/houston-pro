import React from 'react'
import { Icon, IconProps } from '../Icon'

export function userIcon({ iconName = "user", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}