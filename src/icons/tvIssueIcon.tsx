import React from 'react'
import { Icon, IconProps } from '../Icon'

export function tvIssueIcon({ iconName = "tv-issue", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}