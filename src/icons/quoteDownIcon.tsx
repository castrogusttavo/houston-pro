import React from 'react'
import { Icon, IconProps } from '../Icon'

export function quoteDownIcon({ iconName = "quote-down", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}