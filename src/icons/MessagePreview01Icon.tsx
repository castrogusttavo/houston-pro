import React from 'react'
import { Icon, IconProps } from '../Icon'

export function MessagePreview01Icon({ iconName = "message-preview01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}