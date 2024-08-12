import React from 'react'
import { Icon, IconProps } from '../Icon'

export function sleepingIcon({ iconName = "sleeping", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}