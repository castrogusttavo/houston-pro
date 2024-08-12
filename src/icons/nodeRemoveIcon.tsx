import React from 'react'
import { Icon, IconProps } from '../Icon'

export function nodeRemoveIcon({ iconName = "node-remove", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}