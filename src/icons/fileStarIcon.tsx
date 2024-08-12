import React from 'react'
import { Icon, IconProps } from '../Icon'

export function fileStarIcon({ iconName = "file-star", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}