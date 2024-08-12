import React from 'react'
import { Icon, IconProps } from '../Icon'

export function pieIcon({ iconName = "pie", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}