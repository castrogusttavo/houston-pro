import React from 'react'
import { Icon, IconProps } from '../Icon'

export function aiLearningIcon({ iconName = "ai-learning", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}