import React from 'react'
import { Icon, IconProps } from '../Icon'

export function poopIcon({ iconName = "poop", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}