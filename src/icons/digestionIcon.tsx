import React from 'react'
import { Icon, IconProps } from '../Icon'

export function digestionIcon({ iconName = "digestion", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}