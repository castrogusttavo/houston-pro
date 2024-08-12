import React from 'react'
import { Icon, IconProps } from '../Icon'

export function evilIcon({ iconName = "evil", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}