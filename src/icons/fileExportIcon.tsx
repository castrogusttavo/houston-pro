import React from 'react'
import { Icon, IconProps } from '../Icon'

export function fileExportIcon({ iconName = "file-export", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}