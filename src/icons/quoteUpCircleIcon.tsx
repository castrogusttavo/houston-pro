import React from 'react'
import { Icon, IconProps } from '../Icon'

export function quoteUpCircleIcon({ iconName = "quote-up-circle", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}