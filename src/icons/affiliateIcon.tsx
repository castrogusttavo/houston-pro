import React from 'react'
import { Icon, IconProps } from '../Icon'

export function affiliateIcon({ iconName = "affiliate", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}