import React from 'react'
import { Icon, IconProps } from '../Icon'

export function rssUnlockedIcon({ iconName = "rss-unlocked", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}