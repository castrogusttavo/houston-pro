import React from 'react'
import { Icon, IconProps } from '../Icon'

export function cornIcon({ iconName = "corn", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}