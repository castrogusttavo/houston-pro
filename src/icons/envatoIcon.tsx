import React from 'react'
import { Icon, IconProps } from '../Icon'

export function envatoIcon({ iconName = "envato", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}