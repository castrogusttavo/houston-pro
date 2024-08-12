import React from 'react'
import { Icon, IconProps } from '../Icon'

export function beboIcon({ iconName = "bebo", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}