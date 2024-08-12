import React from 'react'
import { Icon, IconProps } from '../Icon'

export function vineIcon({ iconName = "vine", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}