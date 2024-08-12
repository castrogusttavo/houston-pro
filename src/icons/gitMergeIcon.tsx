import React from 'react'
import { Icon, IconProps } from '../Icon'

export function gitMergeIcon({ iconName = "git-merge", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}