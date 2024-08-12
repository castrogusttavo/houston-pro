import React from 'react'
import { Icon, IconProps } from '../Icon'

export function lockKeyIcon({ iconName = "lock-key", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}