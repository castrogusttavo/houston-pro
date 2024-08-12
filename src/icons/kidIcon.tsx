import React from 'react'
import { Icon, IconProps } from '../Icon'

export function kidIcon({ iconName = "kid", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}