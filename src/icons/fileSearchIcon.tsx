import React from 'react'
import { Icon, IconProps } from '../Icon'

export function fileSearchIcon({ iconName = "file-search", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}