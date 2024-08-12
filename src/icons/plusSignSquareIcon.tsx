import React from 'react'
import { Icon, IconProps } from '../Icon'

export function plusSignSquareIcon({ iconName = "plus-sign-square", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}