import React from 'react'
import { Icon, IconProps } from '../Icon'

export function infinityCircleIcon({ iconName = "infinity-circle", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}