import React from 'react'
import { Icon, IconProps } from '../Icon'

export function folderOffIcon({ iconName = "folder-off", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}