import React from 'react'
import { Icon, IconProps } from '../Icon'

export function poundSquareIcon({ iconName = "pound-square", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}