import React from 'react'
import { Icon, IconProps } from '../Icon'

export function touch06Icon({ iconName = "touch06", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}