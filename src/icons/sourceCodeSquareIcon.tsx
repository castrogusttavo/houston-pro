import React from 'react'
import { Icon, IconProps } from '../Icon'

export function sourceCodeSquareIcon({ iconName = "source-code-square", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}