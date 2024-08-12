import React from 'react'
import { Icon, IconProps } from '../Icon'

export function databaseSettingIcon({ iconName = "database-setting", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}