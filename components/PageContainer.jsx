import { Fragment, useEffect, useRef, useState } from "react"
import tw, { css } from "twin.macro"
import Head from "next/head"
import Link from "next/link"
import SEO from "next-seo.config"
import { NextSeo } from "next-seo"
import { useRouter } from "next/router"
import { Header, Button, Logo } from "@components"

export default function MarketingContainer({ children, fixed, headerBorder, title }) {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()
  const url = `${SEO.canonical}${router.route}`

  return (
    <Fragment>
      <NextSeo
        title={title}
        canonical={url}
        openGraph={{
          url,
          title,
        }}
        robotsProps={{
          nosnippet: true,
          notranslate: true,
          noimageindex: true,
          noarchive: true,
          maxSnippet: -1,
          maxImagePreview: "none",
          maxVideoPreview: -1,
        }}
      />
      <Header fixed={fixed} headerBorder={headerBorder}>
        <Logo showName />
      </Header>
      {children}
    </Fragment>
  )
}
