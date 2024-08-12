import React from 'react'
import { Icon, IconProps } from '../Icon'

export function congruentToSquareIcon({ iconName = "congruent-to-square", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}