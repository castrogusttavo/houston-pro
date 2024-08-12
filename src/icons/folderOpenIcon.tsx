import React from 'react'
import { Icon, IconProps } from '../Icon'

export function folderOpenIcon({ iconName = "folder-open", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}