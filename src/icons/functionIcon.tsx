import React from 'react'
import { Icon, IconProps } from '../Icon'

export function functionIcon({ iconName = "function", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}