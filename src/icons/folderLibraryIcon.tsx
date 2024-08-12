import React from 'react'
import { Icon, IconProps } from '../Icon'

export function folderLibraryIcon({ iconName = "folder-library", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}