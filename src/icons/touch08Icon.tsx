import React from 'react'
import { Icon, IconProps } from '../Icon'

export function touch08Icon({ iconName = "touch08", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}