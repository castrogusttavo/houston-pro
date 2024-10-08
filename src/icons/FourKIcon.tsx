import React from 'react'
import { Icon, IconProps } from '../Icon'

export function FourKIcon({ iconName = '4k', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
