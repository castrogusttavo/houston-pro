import React from 'react'
import { Icon, IconProps } from '../Icon'

export function clinicIcon({ iconName = "clinic", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}