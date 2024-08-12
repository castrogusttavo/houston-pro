import React from 'react'
import { Icon, IconProps } from '../Icon'

export function conferenceIcon({ iconName = "conference", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}