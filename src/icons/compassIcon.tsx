import React from 'react'
import { Icon, IconProps } from '../Icon'

export function compassIcon({ iconName = "compass", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}