import React from 'react'
import { Icon, IconProps } from '../Icon'

export function googleHomeIcon({ iconName = "google-home", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}