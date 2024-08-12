import React from 'react'
import { Icon, IconProps } from '../Icon'

export function alphaSquareIcon({ iconName = "alpha-square", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}