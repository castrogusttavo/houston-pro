import React from 'react'
import { Icon, IconProps } from '../Icon'

export function variableIcon({ iconName = "variable", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}