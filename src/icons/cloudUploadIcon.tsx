import React from 'react'
import { Icon, IconProps } from '../Icon'

export function cloudUploadIcon({ iconName = "cloud-upload", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}