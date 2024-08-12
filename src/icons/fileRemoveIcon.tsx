import React from 'react'
import { Icon, IconProps } from '../Icon'

export function fileRemoveIcon({ iconName = "file-remove", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}