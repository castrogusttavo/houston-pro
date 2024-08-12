import React from 'react'
import { Icon, IconProps } from '../Icon'

export function fileCorruptIcon({ iconName = "file-corrupt", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}