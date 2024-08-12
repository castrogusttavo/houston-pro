import React from 'react'
import { Icon, IconProps } from '../Icon'

export function givePillIcon({ iconName = "give-pill", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}