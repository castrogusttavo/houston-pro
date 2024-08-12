import React from 'react'
import { Icon, IconProps } from '../Icon'

export function rssErrorIcon({ iconName = "rss-error", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}