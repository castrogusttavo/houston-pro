import React from 'react'
import { Icon, IconProps } from '../Icon'

export function touch07Icon({ iconName = "touch07", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}