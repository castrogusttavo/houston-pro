import React from 'react'
import { Icon, IconProps } from '../Icon'

export function film01Icon({ iconName = "film01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}