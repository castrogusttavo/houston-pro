import React from 'react'
import { Icon, IconProps } from '../Icon'

export function almsIcon({ iconName = "alms", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}