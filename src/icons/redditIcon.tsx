import React from 'react'
import { Icon, IconProps } from '../Icon'

export function redditIcon({ iconName = "reddit", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}