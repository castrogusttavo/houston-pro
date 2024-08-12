import React from 'react'
import { Icon, IconProps } from '../Icon'

export function aiDnaIcon({ iconName = "ai-dna", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}