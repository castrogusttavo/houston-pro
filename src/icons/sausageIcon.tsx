import React from 'react'
import { Icon, IconProps } from '../Icon'

export function sausageIcon({ iconName = "sausage", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}