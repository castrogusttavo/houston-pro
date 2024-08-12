import React from 'react'
import { Icon, IconProps } from '../Icon'

export function userStatusIcon({ iconName = "user-status", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}