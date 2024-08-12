import React from 'react'
import { Icon, IconProps } from '../Icon'

export function plaxoIcon({ iconName = "plaxo", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}