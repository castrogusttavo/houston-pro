import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Lamp01Icon({ iconName = "lamp01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}