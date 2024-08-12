import React from 'react'
import { Icon, IconProps } from '../Icon'

export function tvSmartIcon({ iconName = "tv-smart", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}