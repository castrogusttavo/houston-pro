import React from 'react'
import { Icon, IconProps } from '../Icon'

export function rightToLeftBlockQuoteIcon({ iconName = "right-to-left-block-quote", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}