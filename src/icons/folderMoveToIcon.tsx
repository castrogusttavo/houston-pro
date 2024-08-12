import React from 'react'
import { Icon, IconProps } from '../Icon'

export function folderMoveToIcon({ iconName = "folder-move-to", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}