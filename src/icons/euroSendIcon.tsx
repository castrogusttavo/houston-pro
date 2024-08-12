import React from 'react'
import { Icon, IconProps } from '../Icon'

export function euroSendIcon({ iconName = "euro-send", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}