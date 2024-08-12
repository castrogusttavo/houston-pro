import React from 'react'
import { Icon, IconProps } from '../Icon'

export function mouse23Icon({ iconName = "mouse23", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}