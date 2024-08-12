import React from 'react'
import { Icon, IconProps } from '../Icon'

export function databaseIcon({ iconName = "database", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}