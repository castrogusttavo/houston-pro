import React from 'react'
import { Icon, IconProps } from '../Icon'

export function inspectCodeIcon({ iconName = "inspect-code", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}