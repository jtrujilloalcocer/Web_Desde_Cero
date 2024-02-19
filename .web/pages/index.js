/** @jsxImportSource @emotion/react */


import { Fragment } from "react"
import { Fragment_fd0e7cb8f9fb4669a6805377d925fba0 } from "/utils/stateful_components"
import { HStack, Text } from "@chakra-ui/react"
import "focus-visible/dist/focus-visible"
import NextHead from "next/head"



export default function Component() {

  return (
    <Fragment>
  <Fragment_fd0e7cb8f9fb4669a6805377d925fba0/>
  <HStack sx={{"position": "sticky", "bg": "grey", "paddingX": "10px", "paddingY": "10px"}}>
  <Text sx={{"backgroundImage": "linear-gradient(271.68deg, #EE756A 0.75%, #756AEE 88.52%)", "backgroundClip": "text", "fontWeight": "bold", "fontSize": "1em"}}>
  {`J. Fernando Trujillo`}
</Text>
</HStack>
  <NextHead>
  <title>
  {`Reflex App`}
</title>
  <meta content={`A Reflex app.`} name={`description`}/>
  <meta content={`favicon.ico`} property={`og:image`}/>
</NextHead>
</Fragment>
  )
}
