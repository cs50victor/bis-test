import { useEffect, useState } from "react"
import tw, { styled, css } from "twin.macro"
import Link from "next/link"
import { Button, PageContainer } from "@components"

const columnContainerStyle = css`
  ${tw`flex items-center justify-around h-full border-2 border-black`}
  div:not(:last-child) {
    ${tw`border-r border-black`}
  }
`
const Column = tw.div`relative w-1/3 h-full flex justify-center`
const Text = tw.span`font-bold font-hero text-neutral-9 text-3xl lg:text-4xl`

const column1Style = css`
  /* <name>_<duration>_<timing-function>_<delay>_<iteration-count>_<direction> */
  ${tw`animate-[blueToYellow_1.35s_linear_infinite_alternate]`}
  @keyframes blueToYellow {
    from {
      background-color: #eecb00;
    }
    to {
      background-color: blue;
    }
  }
  span {
    ${tw`align-self[center] animate-[blackToWhite_1.35s_ease-in-out_infinite_alternate]`}
  }
  @keyframes blackToWhite {
    from {
      color: black;
    }
    to {
      color: white;
    }
  }
`

const column2Style = css`
  /* <name>_<duration>_<timing-function>_<delay>_<iteration-count>_<direction> */
  span {
    ${tw`align-self[center] animate-[spinningText_3s_cubic-bezier(0,-0.02, 0, 0.77)_infinite]`}
  }
  @keyframes spinningText {
    25% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`
const column3Style = css`
  ${tw`bg-blue-700`}
  /* <name>_<duration>_<timing-function>_<delay>_<iteration-count>_<direction> */
  /* this doesn't work 100% as expected. need to find a way to ease-out, and  */
  span {
    ${tw`absolute animate-[movingText_1.5s_ease-in-out_infinite_alternate-reverse]`}
  }
  @keyframes movingText {
    0% {
      top: 15%;
      color: white;
    }
    50% {
      top: 50%;
      color: black;
    }
    100% {
      top: 85%;
      color: white;
    }
  }
`
export default function Home() {
  return (
    <PageContainer headerBorder>
      <main tw="h-full">
        <section tw="w-full h-[91vh] p-5 mt-4">
          <div css={[columnContainerStyle]}>
            <Column css={[column1Style]}>
              <Text>ONE</Text>
            </Column>
            <Column css={[column2Style]}>
              <Text>TWO</Text>
            </Column>
            <Column css={[column3Style]}>
              <Text>THREE</Text>
            </Column>
          </div>
        </section>
      </main>
    </PageContainer>
  )
}
