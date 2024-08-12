import React from 'react'
import { Icon, IconProps } from '../Icon'

export function fileUnlockedIcon({ iconName = "file-unlocked", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}