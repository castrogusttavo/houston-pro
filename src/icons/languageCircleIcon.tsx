import React from 'react'
import { Icon, IconProps } from '../Icon'

export function languageCircleIcon({ iconName = "language-circle", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}