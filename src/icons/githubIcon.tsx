import React from 'react'
import { Icon, IconProps } from '../Icon'

export function githubIcon({ iconName = "github", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}