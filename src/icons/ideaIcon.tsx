import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ideaIcon({ iconName = "idea", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}