import React from 'react'
import { Icon, IconProps } from '../Icon'

export function googleIcon({ iconName = "google", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}