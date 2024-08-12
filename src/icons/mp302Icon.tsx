import React from 'react'
import { Icon, IconProps } from '../Icon'

export function mp302Icon({ iconName = "mp302", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}