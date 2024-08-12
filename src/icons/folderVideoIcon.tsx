import React from 'react'
import { Icon, IconProps } from '../Icon'

export function folderVideoIcon({ iconName = "folder-video", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}