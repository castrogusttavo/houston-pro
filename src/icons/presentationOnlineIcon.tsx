import React from 'react'
import { Icon, IconProps } from '../Icon'

export function presentationOnlineIcon({ iconName = "presentation-online", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}