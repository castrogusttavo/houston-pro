import React from 'react'
import { Icon, IconProps } from '../Icon'

export function metaIcon({ iconName = "meta", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}