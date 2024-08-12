import React from 'react'
import { Icon, IconProps } from '../Icon'

export function editOffIcon({ iconName = "edit-off", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}