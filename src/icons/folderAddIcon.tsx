import React from 'react'
import { Icon, IconProps } from '../Icon'

export function folderAddIcon({ iconName = "folder-add", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}