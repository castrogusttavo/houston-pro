import React from 'react'
import { Icon, IconProps } from '../Icon'

export function helpSquareIcon({ iconName = "help-square", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}