import React from 'react'
import { Icon, IconProps } from '../Icon'

export function userListIcon({ iconName = "user-list", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}