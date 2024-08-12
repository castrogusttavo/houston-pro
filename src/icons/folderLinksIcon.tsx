import React from 'react'
import { Icon, IconProps } from '../Icon'

export function folderLinksIcon({ iconName = "folder-links", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}