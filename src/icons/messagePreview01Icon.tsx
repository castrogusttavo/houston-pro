import React from 'react'
import { Icon, IconProps } from '../Icon'

export function messagePreview01Icon({ iconName = "message-preview01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}