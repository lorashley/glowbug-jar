import { Heading, HeadingProps } from '@chakra-ui/react'

// Define shortcut components
export const H1 = (props: HeadingProps) => <Heading size="4xl" {...props} />
export const H2 = (props: HeadingProps) => <Heading size="3xl" {...props} />
export const H3 = (props: HeadingProps) => <Heading size="2xl" {...props} />
export const H4 = (props: HeadingProps) => <Heading size="xl" {...props} />
export const H5 = (props: HeadingProps) => <Heading size="lg" {...props} />
export const H6 = (props: HeadingProps) => <Heading size="md" {...props} />
