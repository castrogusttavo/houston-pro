import React from 'react'
import { Icon, IconProps } from '../Icon'

export function giftIcon({ iconName = "gift", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}