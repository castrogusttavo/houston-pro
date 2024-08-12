import React from 'react'
import { Icon, IconProps } from '../Icon'

export function promotionIcon({ iconName = "promotion", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}