import React from 'react'
import { Icon, IconProps } from '../Icon'

export function lockedIcon({ iconName = "locked", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}