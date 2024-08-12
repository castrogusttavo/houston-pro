import React from 'react'
import { Icon, IconProps } from '../Icon'

export function folderUnknownIcon({ iconName = "folder-unknown", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}