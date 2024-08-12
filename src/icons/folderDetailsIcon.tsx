import React from 'react'
import { Icon, IconProps } from '../Icon'

export function folderDetailsIcon({ iconName = "folder-details", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}