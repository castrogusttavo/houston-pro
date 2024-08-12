import React from 'react'
import { Icon, IconProps } from '../Icon'

export function moreOrLessSquareIcon({ iconName = "more-or-less-square", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}