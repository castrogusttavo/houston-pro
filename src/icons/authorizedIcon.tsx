import React from 'react'
import { Icon, IconProps } from '../Icon'

export function authorizedIcon({ iconName = "authorized", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}