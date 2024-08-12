import React from 'react'
import { Icon, IconProps } from '../Icon'

export function office365Icon({ iconName = "office365", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}