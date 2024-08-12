import React from 'react'
import { Icon, IconProps } from '../Icon'

export function folderCloudIcon({ iconName = "folder-cloud", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}