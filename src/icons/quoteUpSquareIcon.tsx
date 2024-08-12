import React from 'react'
import { Icon, IconProps } from '../Icon'

export function quoteUpSquareIcon({ iconName = "quote-up-square", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}