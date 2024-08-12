import React from 'react'
import { Icon, IconProps } from '../Icon'

export function bingIcon({ iconName = "bing", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}