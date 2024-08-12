import React from 'react'
import { Icon, IconProps } from '../Icon'

export function folderSyncIcon({ iconName = "folder-sync", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}