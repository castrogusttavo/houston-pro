import React from 'react'
import { Icon, IconProps } from '../Icon'

export function stopIcon({ iconName = "stop", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}