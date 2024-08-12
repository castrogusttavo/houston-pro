import React from 'react'
import { Icon, IconProps } from '../Icon'

export function yogaMatIcon({ iconName = "yoga-mat", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}