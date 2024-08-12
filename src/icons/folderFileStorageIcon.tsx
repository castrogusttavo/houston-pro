import React from 'react'
import { Icon, IconProps } from '../Icon'

export function folderFileStorageIcon({ iconName = "folder-file-storage", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}