import React from 'react'
import { Icon, IconProps } from '../Icon'

export function folderTransferIcon({ iconName = "folder-transfer", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}