import React from 'react'
import { Icon, IconProps } from '../Icon'

export function limitationIcon({ iconName = "limitation", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}