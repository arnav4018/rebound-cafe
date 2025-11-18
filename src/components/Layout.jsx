import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <div className="flex min-h-screen flex-col bg-rebound-bg text-rebound-text">
      <Navbar />
      <main className="flex-1 bg-rebound-bg">
        <div className="mx-auto max-w-screen-xl px-4 py-8 md:px-6 md:py-12 lg:py-16">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  )
}
