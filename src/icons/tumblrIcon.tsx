import React from 'react'
import { Icon, IconProps } from '../Icon'

export function tumblrIcon({ iconName = "tumblr", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}