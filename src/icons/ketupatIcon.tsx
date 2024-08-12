import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ketupatIcon({ iconName = "ketupat", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}