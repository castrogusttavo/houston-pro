import React from 'react'
import { Icon, IconProps } from '../Icon'

export function bedIcon({ iconName = "bed", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}