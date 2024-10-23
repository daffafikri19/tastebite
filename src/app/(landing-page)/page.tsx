import { HeroBanner } from "@/components/landing-page/hero-banner";
import { ThemeToggle } from "@/components/theme-toggle";

export default async function Home() {

  return (
    <div className="w-full h-full p-4 md:p-8">
      <div className="w-full flex justify-center">
        <HeroBanner />
      </div>

      {/* todo: top 3 rating / random seafood */}

      {/* todo: top 3 rating / random cake */}

      {/* todo: popular 6 categories / random categories */}

      {/* todo: banner idea */}

      {/* todo: top 6 newest to latest recipe */}

      {/* todo: mini galery recipe random */}

    </div>
  )
}
