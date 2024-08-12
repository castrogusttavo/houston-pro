import React from 'react'
import { Icon, IconProps } from '../Icon'

export function inboxUploadIcon({ iconName = "inbox-upload", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}