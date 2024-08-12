import React from 'react'
import { Icon, IconProps } from '../Icon'

export function stethoscopeIcon({ iconName = "stethoscope", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}