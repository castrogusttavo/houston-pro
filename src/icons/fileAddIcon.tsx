import React from 'react'
import { Icon, IconProps } from '../Icon'

export function fileAddIcon({ iconName = "file-add", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}