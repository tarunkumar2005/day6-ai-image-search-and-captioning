import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose md:text-left">
            Built by{" "}
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              Your Name
            </a>
            . Hosted on{" "}
            <a
              href="https://vercel.com"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              Vercel
            </a>
            . Images from{" "}
            <a
              href="https://unsplash.com"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              Unsplash
            </a>
            .
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="/privacy" className="text-sm underline underline-offset-4">
            Privacy
          </Link>
          <Link href="/terms" className="text-sm underline underline-offset-4">
            Terms
          </Link>
        </div>
      </div>
    </footer>
  )
}