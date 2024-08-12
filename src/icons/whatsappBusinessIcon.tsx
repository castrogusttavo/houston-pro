import React from 'react'
import { Icon, IconProps } from '../Icon'

export function whatsappBusinessIcon({ iconName = "whatsapp-business", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}