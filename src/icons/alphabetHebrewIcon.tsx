import React from 'react'
import { Icon, IconProps } from '../Icon'

export function alphabetHebrewIcon({ iconName = "alphabet-hebrew", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}