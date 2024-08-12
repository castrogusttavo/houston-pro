import React from 'react'
import { Icon, IconProps } from '../Icon'

export function StickyNote01Icon({ iconName = "sticky-note01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}