import React from 'react'
import { Icon, IconProps } from '../Icon'

export function noodlesIcon({ iconName = "noodles", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}