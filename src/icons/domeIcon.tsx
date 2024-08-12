import React from 'react'
import { Icon, IconProps } from '../Icon'

export function domeIcon({ iconName = "dome", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}