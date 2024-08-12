import React from 'react'
import { Icon, IconProps } from '../Icon'

export function dangerIcon({ iconName = "danger", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}