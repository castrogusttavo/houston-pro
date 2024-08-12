import React from 'react'
import { Icon, IconProps } from '../Icon'

export function shuffleIcon({ iconName = "shuffle", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}