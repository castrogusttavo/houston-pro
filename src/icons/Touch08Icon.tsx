import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Touch08Icon({ iconName = "touch08", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}