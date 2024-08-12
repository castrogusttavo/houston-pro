import React from 'react'
import { Icon, IconProps } from '../Icon'

export function mymindIcon({ iconName = "mymind", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}