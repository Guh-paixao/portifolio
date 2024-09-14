import './globals.css'
import { Poppins, Rouge_Script } from 'next/font/google'
import { ThemeProvider } from '@/components/theme/themeProvider'
import Layout from '@/components/frame/layout'

// If loading a variable font, you don't need to specify the font weight
const poppins = Poppins({
  weight: ['100', '200', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
})

const rougeScript = Rouge_Script({
  weight: ['400'],
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <html lang="pt-BR" className={`${poppins.className} ${rougeScript.className}`} suppressHydrationWarning>
        <head />
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Layout>
              {children}
            </Layout>
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}