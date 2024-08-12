import React from 'react'
import { Icon, IconProps } from '../Icon'

export function fileManagementIcon({ iconName = "file-management", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}