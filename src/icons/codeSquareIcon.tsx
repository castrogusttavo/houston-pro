import React from 'react'
import { Icon, IconProps } from '../Icon'

export function codeSquareIcon({ iconName = "code-square", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}