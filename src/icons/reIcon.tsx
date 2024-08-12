import React from 'react'
import { Icon, IconProps } from '../Icon'

export function reIcon({ iconName = "re", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}