import React from 'react'
import { Icon, IconProps } from '../Icon'

export function piIcon({ iconName = "pi", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}