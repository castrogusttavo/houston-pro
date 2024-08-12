import React from 'react'
import { Icon, IconProps } from '../Icon'

export function percentCircleIcon({ iconName = "percent-circle", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}