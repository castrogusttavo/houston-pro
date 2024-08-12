import React from 'react'
import { Icon, IconProps } from '../Icon'

export function folderSecurityIcon({ iconName = "folder-security", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}