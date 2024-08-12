import React from 'react'
import { Icon, IconProps } from '../Icon'

export function nodeEditIcon({ iconName = "node-edit", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}