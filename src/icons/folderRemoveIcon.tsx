import React from 'react'
import { Icon, IconProps } from '../Icon'

export function folderRemoveIcon({ iconName = "folder-remove", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}