import React from 'react'
import { Icon, IconProps } from '../Icon'

export function percentSquareIcon({ iconName = "percent-square", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}