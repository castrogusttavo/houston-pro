import React from 'react'
import { Icon, IconProps } from '../Icon'

export function searchingIcon({ iconName = "searching", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}