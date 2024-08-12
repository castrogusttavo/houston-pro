import React from 'react'
import { Icon, IconProps } from '../Icon'

export function hyperboleIcon({ iconName = "hyperbole", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}