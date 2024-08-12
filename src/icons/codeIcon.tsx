import React from 'react'
import { Icon, IconProps } from '../Icon'

export function codeIcon({ iconName = "code", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}