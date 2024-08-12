import React from 'react'
import { Icon, IconProps } from '../Icon'

export function timeManagementCircleIcon({ iconName = "time-management-circle", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}