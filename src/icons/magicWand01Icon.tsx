import React from 'react'
import { Icon, IconProps } from '../Icon'

export function magicWand01Icon({ iconName = "magic-wand01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}