import React from 'react'
import { Icon, IconProps } from '../Icon'

export function xVariableCircleIcon({ iconName = "x-variable-circle", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}