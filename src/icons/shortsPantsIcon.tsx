import React from 'react'
import { Icon, IconProps } from '../Icon'

export function shortsPantsIcon({ iconName = "shorts-pants", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}