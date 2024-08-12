import React from 'react'
import { Icon, IconProps } from '../Icon'

export function laptopIssueIcon({ iconName = "laptop-issue", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}