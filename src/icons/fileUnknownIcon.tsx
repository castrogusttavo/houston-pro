import React from 'react'
import { Icon, IconProps } from '../Icon'

export function fileUnknownIcon({ iconName = "file-unknown", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}