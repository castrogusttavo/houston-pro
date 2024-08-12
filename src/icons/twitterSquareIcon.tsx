import React from 'react'
import { Icon, IconProps } from '../Icon'

export function twitterSquareIcon({ iconName = "twitter-square", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}