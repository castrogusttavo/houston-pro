import React from 'react'
import { Icon, IconProps } from '../Icon'

export function codeFolderIcon({ iconName = "code-folder", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}