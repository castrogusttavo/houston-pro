import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ConferenceIcon({ iconName = "conference", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}