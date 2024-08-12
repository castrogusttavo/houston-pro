import React from 'react'
import { Icon, IconProps } from '../Icon'

export function churchIcon({ iconName = "church", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}