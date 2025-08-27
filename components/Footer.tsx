import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="flexCenter mb-24">
      <div className="padding-container max-container flex w-full flex-col gap-14">

        <div className="border bg-gray-20" />
        <p className="regular-14 w-full text-center text-gray-30">2015 | All rights reserved</p>
      </div>
    </footer>
  )
}

export default Footer