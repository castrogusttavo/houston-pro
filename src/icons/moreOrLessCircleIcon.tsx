import React from 'react'
import { Icon, IconProps } from '../Icon'

export function moreOrLessCircleIcon({ iconName = "more-or-less-circle", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}