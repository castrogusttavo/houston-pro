import React from 'react'
import { Icon, IconProps } from '../Icon'

export function browserIcon({ iconName = "browser", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}