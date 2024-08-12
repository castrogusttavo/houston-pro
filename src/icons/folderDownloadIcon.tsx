import React from 'react'
import { Icon, IconProps } from '../Icon'

export function folderDownloadIcon({ iconName = "folder-download", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}