import React from 'react'
import { Icon, IconProps } from '../Icon'

export function fileBookmarkIcon({ iconName = "file-bookmark", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}