import React from 'react'
import { Icon, IconProps } from '../Icon'

export function archiveIcon({ iconName = "archive", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}