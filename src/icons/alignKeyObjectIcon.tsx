import React from 'react'
import { Icon, IconProps } from '../Icon'

export function alignKeyObjectIcon({ iconName = "align-key-object", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}