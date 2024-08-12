import React from 'react'
import { Icon, IconProps } from '../Icon'

export function deadIcon({ iconName = "dead", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}