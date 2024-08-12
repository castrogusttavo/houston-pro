import React from 'react'
import { Icon, IconProps } from '../Icon'

export function fileLockedIcon({ iconName = "file-locked", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}