import React from 'react'
import { Icon, IconProps } from '../Icon'

export function rowInsertIcon({ iconName = "row-insert", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}