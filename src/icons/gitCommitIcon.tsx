import React from 'react'
import { Icon, IconProps } from '../Icon'

export function gitCommitIcon({ iconName = "git-commit", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}