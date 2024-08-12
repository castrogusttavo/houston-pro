import React from 'react'
import { Icon, IconProps } from '../Icon'

export function tagsIcon({ iconName = "tags", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}