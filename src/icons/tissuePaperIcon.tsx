import React from 'react'
import { Icon, IconProps } from '../Icon'

export function tissuePaperIcon({ iconName = "tissue-paper", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}