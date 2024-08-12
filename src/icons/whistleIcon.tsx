import React from 'react'
import { Icon, IconProps } from '../Icon'

export function whistleIcon({ iconName = "whistle", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}