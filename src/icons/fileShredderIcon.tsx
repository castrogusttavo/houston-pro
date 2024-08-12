import React from 'react'
import { Icon, IconProps } from '../Icon'

export function fileShredderIcon({ iconName = "file-shredder", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}