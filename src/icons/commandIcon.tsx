import React from 'react'
import { Icon, IconProps } from '../Icon'

export function commandIcon({ iconName = "command", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}