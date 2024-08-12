import React from 'react'
import { Icon, IconProps } from '../Icon'

export function complaintIcon({ iconName = "complaint", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}