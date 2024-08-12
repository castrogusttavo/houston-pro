import React from 'react'
import { Icon, IconProps } from '../Icon'

export function attachmentIcon({ iconName = "attachment", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}