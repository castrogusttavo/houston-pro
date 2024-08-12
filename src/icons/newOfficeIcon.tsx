import React from 'react'
import { Icon, IconProps } from '../Icon'

export function newOfficeIcon({ iconName = "new-office", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}