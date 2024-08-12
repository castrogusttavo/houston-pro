import React from 'react'
import { Icon, IconProps } from '../Icon'

export function removePiIcon({ iconName = "remove-pi", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}