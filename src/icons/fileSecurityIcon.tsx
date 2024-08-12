import React from 'react'
import { Icon, IconProps } from '../Icon'

export function fileSecurityIcon({ iconName = "file-security", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}