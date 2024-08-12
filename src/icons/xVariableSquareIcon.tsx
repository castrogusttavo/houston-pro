import React from 'react'
import { Icon, IconProps } from '../Icon'

export function xVariableSquareIcon({ iconName = "x-variable-square", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}