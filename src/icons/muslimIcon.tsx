import React from 'react'
import { Icon, IconProps } from '../Icon'

export function muslimIcon({ iconName = "muslim", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}