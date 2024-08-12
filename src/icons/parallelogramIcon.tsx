import React from 'react'
import { Icon, IconProps } from '../Icon'

export function parallelogramIcon({ iconName = "parallelogram", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}