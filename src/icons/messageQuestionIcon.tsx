import React from 'react'
import { Icon, IconProps } from '../Icon'

export function messageQuestionIcon({ iconName = "message-question", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}