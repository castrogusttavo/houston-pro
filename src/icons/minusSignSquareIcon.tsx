import React from 'react'
import { Icon, IconProps } from '../Icon'

export function minusSignSquareIcon({ iconName = "minus-sign-square", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}