import React from 'react'
import { Icon, IconProps } from '../Icon'

export function functionCircleIcon({ iconName = "function-circle", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}