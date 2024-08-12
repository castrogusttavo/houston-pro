import React from 'react'
import { Icon, IconProps } from '../Icon'

export function prawnIcon({ iconName = "prawn", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}