import React from 'react'
import { Icon, IconProps } from '../Icon'

export function userAccountIcon({ iconName = "user-account", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}