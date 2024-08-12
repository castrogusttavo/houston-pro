import React from 'react'
import { Icon, IconProps } from '../Icon'

export function sourceCodeIcon({ iconName = "source-code", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}