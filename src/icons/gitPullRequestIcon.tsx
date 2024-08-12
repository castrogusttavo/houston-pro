import React from 'react'
import { Icon, IconProps } from '../Icon'

export function gitPullRequestIcon({ iconName = "git-pull-request", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}