import React from 'react'
import { Icon, IconProps } from '../Icon'

export function folderZipIcon({ iconName = "folder-zip", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}