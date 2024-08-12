import React from 'react'
import { Icon, IconProps } from '../Icon'

export function quoteDownCircleIcon({ iconName = "quote-down-circle", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}