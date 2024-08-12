import React from 'react'
import { Icon, IconProps } from '../Icon'

export function leftToRightBlockQuoteIcon({ iconName = "left-to-right-block-quote", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}