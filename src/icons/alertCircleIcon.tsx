import React from 'react'
import { Icon, IconProps } from '../Icon'

export function alertCircleIcon({ iconName = "alert-circle", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}