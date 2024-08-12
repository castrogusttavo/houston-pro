import React from 'react'
import { Icon, IconProps } from '../Icon'

export function functionOfXIcon({ iconName = "function-of-x", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}