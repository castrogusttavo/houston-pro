import React from 'react'
import { Icon, IconProps } from '../Icon'

export function gemIcon({ iconName = "gem", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}