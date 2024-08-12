import React from 'react'
import { Icon, IconProps } from '../Icon'

export function databaseImportIcon({ iconName = "database-import", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}