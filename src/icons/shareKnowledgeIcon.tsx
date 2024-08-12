import React from 'react'
import { Icon, IconProps } from '../Icon'

export function shareKnowledgeIcon({ iconName = "share-knowledge", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}