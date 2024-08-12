import React from 'react'
import { Icon, IconProps } from '../Icon'

export function mouse08Icon({ iconName = "mouse08", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}