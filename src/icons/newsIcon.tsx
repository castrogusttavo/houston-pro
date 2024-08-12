import React from 'react'
import { Icon, IconProps } from '../Icon'

export function newsIcon({ iconName = "news", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}