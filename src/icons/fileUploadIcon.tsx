import React from 'react'
import { Icon, IconProps } from '../Icon'

export function fileUploadIcon({ iconName = "file-upload", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}