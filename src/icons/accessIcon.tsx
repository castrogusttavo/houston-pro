import React from 'react'
import { Icon, IconProps } from '../Icon'

export function accessIcon({ iconName = "access", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}