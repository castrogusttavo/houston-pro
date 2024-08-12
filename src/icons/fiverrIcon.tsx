import React from 'react'
import { Icon, IconProps } from '../Icon'

export function fiverrIcon({ iconName = "fiverr", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}