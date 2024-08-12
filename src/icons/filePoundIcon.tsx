import React from 'react'
import { Icon, IconProps } from '../Icon'

export function filePoundIcon({ iconName = "file-pound", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}