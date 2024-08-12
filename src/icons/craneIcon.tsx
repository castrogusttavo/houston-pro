import React from 'react'
import { Icon, IconProps } from '../Icon'

export function craneIcon({ iconName = "crane", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}