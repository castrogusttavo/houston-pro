import React from 'react'
import { Icon, IconProps } from '../Icon'

export function databaseSyncIcon({ iconName = "database-sync", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}