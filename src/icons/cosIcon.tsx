import React from 'react'
import { Icon, IconProps } from '../Icon'

export function cosIcon({ iconName = "cos", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}