import React from 'react'
import { Icon, IconProps } from '../Icon'

export function moonsetIcon({ iconName = "moonset", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}