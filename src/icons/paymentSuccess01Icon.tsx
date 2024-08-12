import React from 'react'
import { Icon, IconProps } from '../Icon'

export function paymentSuccess01Icon({ iconName = "payment-success01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}