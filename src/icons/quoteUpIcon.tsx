import React from 'react'
import { Icon, IconProps } from '../Icon'

export function quoteUpIcon({ iconName = "quote-up", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}