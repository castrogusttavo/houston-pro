import React from 'react'
import { Icon, IconProps } from '../Icon'

export function gitBranchIcon({ iconName = "git-branch", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}