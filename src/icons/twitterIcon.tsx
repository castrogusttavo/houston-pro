import React from 'react'
import { Icon, IconProps } from '../Icon'

export function twitterIcon({ iconName = "twitter", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}