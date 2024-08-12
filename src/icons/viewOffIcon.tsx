import React from 'react'
import { Icon, IconProps } from '../Icon'

export function viewOffIcon({ iconName = "view-off", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}