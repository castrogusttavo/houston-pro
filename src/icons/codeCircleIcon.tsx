import React from 'react'
import { Icon, IconProps } from '../Icon'

export function codeCircleIcon({ iconName = "code-circle", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}