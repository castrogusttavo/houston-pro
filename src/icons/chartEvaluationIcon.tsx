import React from 'react'
import { Icon, IconProps } from '../Icon'

export function chartEvaluationIcon({ iconName = "chart-evaluation", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}