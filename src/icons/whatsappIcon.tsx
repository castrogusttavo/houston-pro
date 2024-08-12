import React from 'react'
import { Icon, IconProps } from '../Icon'

export function whatsappIcon({ iconName = "whatsapp", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}