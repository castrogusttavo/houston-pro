import React from 'react'
import { Icon, IconProps } from '../Icon'

export function multiplicationSignCircleIcon({ iconName = "multiplication-sign-circle", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}