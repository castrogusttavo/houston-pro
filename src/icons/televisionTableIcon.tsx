import React from 'react'
import { Icon, IconProps } from '../Icon'

export function televisionTableIcon({ iconName = "television-table", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}