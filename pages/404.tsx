import Image from "next/image";
import { useRouter } from "next/router";
import four from "../public/404.png";
import Navbar from "../components/Layout/Navbar";
import { NextSeo } from 'next-seo';
import Button from "../components/Button";
import { HomeIcon } from "@heroicons/react/24/outline";

export default function Error() {
  const router = useRouter();

  const handleBack = () => {
    if (window.history.length > 2) {
      router.back();
    } else {
      router.push('/');
    }
  };

  return (
    <>
      <NextSeo
        title="404 - Page Not Found | Pratik Dev Das"
        description="The page you are looking for does not exist. Return to the homepage."
        noindex={true}
      />

      <div className="min-h-screen bg-dark-green-1000">
        <div className="mx-auto max-w-[660px] px-4 py-8 md:py-12 lg:max-w-[900px] xl:max-w-[1184px]">
          <Navbar />
          <main className="font-raleway text-light">
            <div className="mt-8 md:mt-12 flex flex-col items-center justify-center gap-8">
              <div className="w-full max-w-[500px] opacity-0 animate-fade-in-down">
                <div className="relative overflow-hidden rounded-xl bg-dark-green-900 p-8">
                  <Image 
                    src={four} 
                    alt="404 Error" 
                    className="mx-auto w-full h-auto"
                    priority
                  />
                </div>
              </div>

              <div className="text-center opacity-0 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                <h1 className="mb-6 text-3xl font-bold md:text-4xl">Page Not Found</h1>
                <p className="text-gray-300 mb-8 text-lg">The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
                
                <Button onClick={handleBack}>
                  <HomeIcon className="h-5 w-5" />
                  Take Me Back
                </Button>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
