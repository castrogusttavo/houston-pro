import React from 'react'
import { Icon, IconProps } from '../Icon'

export function folderMusicIcon({ iconName = "folder-music", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}