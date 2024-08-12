import React from 'react'
import { Icon, IconProps } from '../Icon'

export function screenAddToHomeIcon({ iconName = "screen-add-to-home", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}