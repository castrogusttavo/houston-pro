import React from 'react'
import { Icon, IconProps } from '../Icon'

export function diplomaIcon({ iconName = "diploma", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}