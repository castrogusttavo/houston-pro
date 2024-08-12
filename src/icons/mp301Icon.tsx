import React from 'react'
import { Icon, IconProps } from '../Icon'

export function mp301Icon({ iconName = "mp301", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}