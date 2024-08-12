import React from 'react'
import { Icon, IconProps } from '../Icon'

export function tongueIcon({ iconName = "tongue", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}