import React from 'react'
import { Icon, IconProps } from '../Icon'

export function fileImportIcon({ iconName = "file-import", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}