import React from 'react'
import { Icon, IconProps } from '../Icon'

export function gitCompareIcon({ iconName = "git-compare", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}