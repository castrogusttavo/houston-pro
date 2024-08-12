import React from 'react'
import { Icon, IconProps } from '../Icon'

export function giftCardIcon({ iconName = "gift-card", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}