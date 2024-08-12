import React from 'react'
import { Icon, IconProps } from '../Icon'

export function folderPinIcon({ iconName = "folder-pin", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}