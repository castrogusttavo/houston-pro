import React from 'react'
import { Icon, IconProps } from '../Icon'

export function projectorIcon({ iconName = "projector", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}