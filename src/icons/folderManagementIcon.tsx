import React from 'react'
import { Icon, IconProps } from '../Icon'

export function folderManagementIcon({ iconName = "folder-management", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}