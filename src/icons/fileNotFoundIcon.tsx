import React from 'react'
import { Icon, IconProps } from '../Icon'

export function fileNotFoundIcon({ iconName = "file-not-found", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}