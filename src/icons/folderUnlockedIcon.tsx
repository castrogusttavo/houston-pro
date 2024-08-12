import React from 'react'
import { Icon, IconProps } from '../Icon'

export function folderUnlockedIcon({ iconName = "folder-unlocked", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}