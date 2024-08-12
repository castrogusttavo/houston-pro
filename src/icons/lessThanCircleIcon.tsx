import React from 'react'
import { Icon, IconProps } from '../Icon'

export function lessThanCircleIcon({ iconName = "less-than-circle", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}