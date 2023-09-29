import StyledComponentsRegistry from './lib/registry'
import GlobalStyles from './styles/GlobalStyles'
import QueryProvider from './lib/queryProvider'
import { Inter_Tight as Inter } from 'next/font/google'
import Header from './components/home-components/home-layout-components/Header'
import AnimatedLogo from './components/home-components/home-layout-components/AnimatedLogo'
import MainNav from './components/home-components/home-layout-components/MainNav'
import { ComponentChildProp } from './utils/ComponentChildProp'

const inter = Inter({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  variable: '--font-inter',
})

export const metadata = {
  title: 'Techs Playground',
  description: 'Frontend techs playground',
}

export default function RootLayout({ children }: ComponentChildProp) {
  return (
    <html lang="en">
      <QueryProvider>
        <StyledComponentsRegistry>
          <GlobalStyles />
          <body className={`${inter.variable}`}>
            <div>
              <div>
                <Header>
                  <AnimatedLogo />
                  <MainNav />
                </Header>
              </div>
              {children}
            </div>
          </body>
        </StyledComponentsRegistry>
      </QueryProvider>
    </html>
  )
}
