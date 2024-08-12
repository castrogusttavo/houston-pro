import React from 'react'
import { Icon, IconProps } from '../Icon'

export function theProphetsMosqueIcon({ iconName = "the-prophets-mosque", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}