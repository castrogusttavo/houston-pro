import React from 'react'
import { Icon, IconProps } from '../Icon'

export function mentoringIcon({ iconName = "mentoring", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}