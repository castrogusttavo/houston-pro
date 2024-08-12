import React from 'react'
import { Icon, IconProps } from '../Icon'

export function mouse17Icon({ iconName = "mouse17", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}