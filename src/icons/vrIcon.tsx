import React from 'react'
import { Icon, IconProps } from '../Icon'

export function vrIcon({ iconName = "vr", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}