import React from 'react'
import { Icon, IconProps } from '../Icon'

export function labelImportantIcon({ iconName = "label-important", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}