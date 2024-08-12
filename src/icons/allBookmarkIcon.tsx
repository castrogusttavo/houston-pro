import React from 'react'
import { Icon, IconProps } from '../Icon'

export function allBookmarkIcon({ iconName = "all-bookmark", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}