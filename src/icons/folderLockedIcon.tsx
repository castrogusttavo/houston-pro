import React from 'react'
import { Icon, IconProps } from '../Icon'

export function folderLockedIcon({ iconName = "folder-locked", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}