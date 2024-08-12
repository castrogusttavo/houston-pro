import React from 'react'
import { Icon, IconProps } from '../Icon'

export function folderEditIcon({ iconName = "folder-edit", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}