import React from 'react'
import { Icon, IconProps } from '../Icon'

export function folderAudioIcon({ iconName = "folder-audio", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}