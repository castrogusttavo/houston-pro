import React from 'react'
import { Icon, IconProps } from '../Icon'

export function wordpressIcon({ iconName = "wordpress", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}