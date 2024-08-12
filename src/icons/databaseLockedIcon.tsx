import React from 'react'
import { Icon, IconProps } from '../Icon'

export function databaseLockedIcon({ iconName = "database-locked", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}