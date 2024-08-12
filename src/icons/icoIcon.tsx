import React from 'react'
import { Icon, IconProps } from '../Icon'

export function icoIcon({ iconName = "ico", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}