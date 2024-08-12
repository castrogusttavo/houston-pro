import React from 'react'
import { Icon, IconProps } from '../Icon'

export function marketAnalysisIcon({ iconName = "market-analysis", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}