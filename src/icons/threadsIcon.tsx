import React from 'react'
import { Icon, IconProps } from '../Icon'

export function threadsIcon({ iconName = "threads", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}