import React from 'react'
import { Icon, IconProps } from '../Icon'

export function checkListIcon({ iconName = "check-list", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}