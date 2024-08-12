import React from 'react'
import { Icon, IconProps } from '../Icon'

export function languageSquareIcon({ iconName = "language-square", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}