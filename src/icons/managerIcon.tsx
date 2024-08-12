import React from 'react'
import { Icon, IconProps } from '../Icon'

export function managerIcon({ iconName = "manager", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}