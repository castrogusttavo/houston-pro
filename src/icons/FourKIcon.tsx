import React from 'react'
import { Icon, IconProps } from '../Icon'

export function FourKIcon({ iconName = 'four-k-icon', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
