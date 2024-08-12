import React from 'react'
import { Icon, IconProps } from '../Icon'

export function winkIcon({ iconName = "wink", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}