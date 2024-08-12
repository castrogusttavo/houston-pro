import React from 'react'
import { Icon, IconProps } from '../Icon'

export function folderViewIcon({ iconName = "folder-view", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}