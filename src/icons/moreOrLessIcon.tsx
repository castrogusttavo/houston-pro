import React from 'react'
import { Icon, IconProps } from '../Icon'

export function moreOrLessIcon({ iconName = "more-or-less", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}