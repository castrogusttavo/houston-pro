import React from 'react'
import { Icon, IconProps } from '../Icon'

export function FolderMoveInIcon({ iconName = "folder-move-in", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}