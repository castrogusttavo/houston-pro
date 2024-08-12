import React from 'react'
import { Icon, IconProps } from '../Icon'

export function fileLinkIcon({ iconName = "file-link", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}