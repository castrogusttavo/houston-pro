import React from 'react'
import { Icon, IconProps } from '../Icon'

export function flaticonIcon({ iconName = "flaticon", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}