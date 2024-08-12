import React from 'react'
import { Icon, IconProps } from '../Icon'

export function userStoryIcon({ iconName = "user-story", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}