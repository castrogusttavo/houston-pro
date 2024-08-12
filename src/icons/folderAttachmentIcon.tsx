import React from 'react'
import { Icon, IconProps } from '../Icon'

export function folderAttachmentIcon({ iconName = "folder-attachment", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}