import React from 'react'
import { Icon, IconProps } from '../Icon'

export function callDoneIcon({ iconName = "call-done", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}