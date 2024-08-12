import React from 'react'
import { Icon, IconProps } from '../Icon'

export function folderSearchIcon({ iconName = "folder-search", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}