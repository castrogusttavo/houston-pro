import React from 'react'
import { Icon, IconProps } from '../Icon'

export function structureFolderIcon({ iconName = "structure-folder", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}