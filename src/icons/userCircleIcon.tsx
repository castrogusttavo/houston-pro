import React from 'react'
import { Icon, IconProps } from '../Icon'

export function userCircleIcon({ iconName = "user-circle", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}