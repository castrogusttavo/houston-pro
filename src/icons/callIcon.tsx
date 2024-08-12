import React from 'react'
import { Icon, IconProps } from '../Icon'

export function callIcon({ iconName = "call", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}