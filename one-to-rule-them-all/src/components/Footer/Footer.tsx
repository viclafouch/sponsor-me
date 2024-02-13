import {
  Footer as FlowbiteFooter,
  FooterCopyright,
  FooterLink,
  FooterLinkGroup
} from 'flowbite-react'

const Footer = () => {
  return (
    <FlowbiteFooter container>
      <FooterCopyright
        href="https://github.com/viclafouch"
        by="Victor de la Fouchardiere"
        year={new Date().getFullYear()}
      />
      <FooterLinkGroup>
        <FooterLink href="#">About</FooterLink>
      </FooterLinkGroup>
    </FlowbiteFooter>
  )
}

export default Footer
