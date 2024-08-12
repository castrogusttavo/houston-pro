import React from 'react'
import { Icon, IconProps } from '../Icon'

export function doorLockIcon({ iconName = "door-lock", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}