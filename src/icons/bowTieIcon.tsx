import React from 'react'
import { Icon, IconProps } from '../Icon'

export function bowTieIcon({ iconName = "bow-tie", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}