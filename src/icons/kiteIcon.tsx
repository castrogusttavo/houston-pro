import React from 'react'
import { Icon, IconProps } from '../Icon'

export function kiteIcon({ iconName = "kite", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}