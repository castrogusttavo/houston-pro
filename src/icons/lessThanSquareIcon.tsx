import React from 'react'
import { Icon, IconProps } from '../Icon'

export function lessThanSquareIcon({ iconName = "less-than-square", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}