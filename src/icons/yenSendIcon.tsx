import React from 'react'
import { Icon, IconProps } from '../Icon'

export function yenSendIcon({ iconName = "yen-send", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}