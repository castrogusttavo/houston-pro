import React from 'react'
import { Icon, IconProps } from '../Icon'

export function crazyIcon({ iconName = "crazy", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}