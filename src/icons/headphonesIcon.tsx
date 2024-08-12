import React from 'react'
import { Icon, IconProps } from '../Icon'

export function headphonesIcon({ iconName = "headphones", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}