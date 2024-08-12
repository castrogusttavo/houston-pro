import React from 'react'
import { Icon, IconProps } from '../Icon'

export function gymnasticIcon({ iconName = "gymnastic", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}