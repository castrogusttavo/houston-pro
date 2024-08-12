import React from 'react'
import { Icon, IconProps } from '../Icon'

export function schemeIcon({ iconName = "scheme", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}