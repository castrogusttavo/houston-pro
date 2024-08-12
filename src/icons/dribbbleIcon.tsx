import React from 'react'
import { Icon, IconProps } from '../Icon'

export function dribbbleIcon({ iconName = "dribbble", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}