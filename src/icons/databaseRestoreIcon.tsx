import React from 'react'
import { Icon, IconProps } from '../Icon'

export function databaseRestoreIcon({ iconName = "database-restore", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}