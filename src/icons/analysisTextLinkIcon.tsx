import React from 'react'
import { Icon, IconProps } from '../Icon'

export function analysisTextLinkIcon({ iconName = "analysis-text-link", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}