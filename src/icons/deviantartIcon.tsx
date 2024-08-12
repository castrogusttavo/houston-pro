import React from 'react'
import { Icon, IconProps } from '../Icon'

export function deviantartIcon({ iconName = "deviantart", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}