import React from 'react'
import { Icon, IconProps } from '../Icon'

export function newJobIcon({ iconName = "new-job", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}