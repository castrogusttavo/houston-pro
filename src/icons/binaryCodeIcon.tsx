import React from 'react'
import { Icon, IconProps } from '../Icon'

export function binaryCodeIcon({ iconName = "binary-code", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}