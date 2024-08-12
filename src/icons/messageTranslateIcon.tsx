import React from 'react'
import { Icon, IconProps } from '../Icon'

export function messageTranslateIcon({ iconName = "message-translate", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}