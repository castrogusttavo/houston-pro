import React from 'react'
import { Icon, IconProps } from '../Icon'

export function FolderImportIcon({ iconName = 'folder-import-icon', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
