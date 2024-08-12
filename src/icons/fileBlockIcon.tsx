import React from 'react'
import { Icon, IconProps } from '../Icon'

export function fileBlockIcon({ iconName = "file-block", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}