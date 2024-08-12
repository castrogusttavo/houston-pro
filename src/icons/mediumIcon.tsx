import React from 'react'
import { Icon, IconProps } from '../Icon'

export function mediumIcon({ iconName = "medium", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}