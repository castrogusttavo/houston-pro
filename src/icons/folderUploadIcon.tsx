import React from 'react'
import { Icon, IconProps } from '../Icon'

export function folderUploadIcon({ iconName = "folder-upload", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}