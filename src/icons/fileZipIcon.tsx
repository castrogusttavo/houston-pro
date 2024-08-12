import React from 'react'
import { Icon, IconProps } from '../Icon'

export function fileZipIcon({ iconName = "file-zip", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}