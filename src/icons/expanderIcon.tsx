import React from 'react'
import { Icon, IconProps } from '../Icon'

export function expanderIcon({ iconName = "expander", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}