import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ramadhanMonthIcon({ iconName = "ramadhan-month", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}