import React from 'react'
import { Icon, IconProps } from '../Icon'

export function listViewIcon({ iconName = "list-view", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}