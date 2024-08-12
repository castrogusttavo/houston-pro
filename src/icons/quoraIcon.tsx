import React from 'react'
import { Icon, IconProps } from '../Icon'

export function quoraIcon({ iconName = "quora", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}