import React from 'react'
import { Icon, IconProps } from '../Icon'

export function bloodBagIcon({ iconName = "blood-bag", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}