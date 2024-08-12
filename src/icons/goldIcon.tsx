import React from 'react'
import { Icon, IconProps } from '../Icon'

export function goldIcon({ iconName = "gold", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}