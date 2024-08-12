import React from 'react'
import { Icon, IconProps } from '../Icon'

export function alphabetGreekIcon({ iconName = "alphabet-greek", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}