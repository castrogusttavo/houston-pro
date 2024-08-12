import React from 'react'
import { Icon, IconProps } from '../Icon'

export function chryslerIcon({ iconName = "chrysler", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}