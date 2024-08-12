import React from 'react'
import { Icon, IconProps } from '../Icon'

export function fileViewIcon({ iconName = "file-view", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}