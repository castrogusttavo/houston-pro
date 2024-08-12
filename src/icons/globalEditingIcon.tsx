import React from 'react'
import { Icon, IconProps } from '../Icon'

export function globalEditingIcon({ iconName = "global-editing", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}