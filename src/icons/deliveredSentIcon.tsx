import React from 'react'
import { Icon, IconProps } from '../Icon'

export function deliveredSentIcon({ iconName = "delivered-sent", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}