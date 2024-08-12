import React from 'react'
import { Icon, IconProps } from '../Icon'

export function questionIcon({ iconName = "question", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}