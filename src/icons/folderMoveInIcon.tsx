import React from 'react'
import { Icon, IconProps } from '../Icon'

export function folderMoveInIcon({ iconName = "folder-move-in", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}