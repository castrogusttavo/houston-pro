import React from 'react'
import { Icon, IconProps } from '../Icon'

export function trademarkIcon({ iconName = "trademark", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}