import React from 'react'
import { Icon, IconProps } from '../Icon'

export function unamusedIcon({ iconName = "unamused", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}