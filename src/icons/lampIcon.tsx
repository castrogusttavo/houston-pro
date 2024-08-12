import React from 'react'
import { Icon, IconProps } from '../Icon'

export function lampIcon({ iconName = "lamp", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}