import React from 'react'
import { Icon, IconProps } from '../Icon'

export function courtLawIcon({ iconName = "court-law", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}