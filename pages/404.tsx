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
          <main className="font-dm-sans text-light">
            <div className="mt-6 md:mt-8 md:mt-12 flex flex-col items-center justify-center gap-6 md:gap-8">
              <div className="w-full max-w-[400px] md:max-w-[500px]">
                <div className="relative overflow-hidden rounded-xl bg-dark-green-100 p-4 md:p-8">
                  <Image 
                    src={four} 
                    alt="404 Error" 
                    className="mx-auto w-full h-auto"
                    priority
                  />
                </div>
              </div>

              <div className="text-center px-4">
                <h1 className="mb-4 md:mb-6 text-2xl md:text-3xl lg:text-4xl font-bold text-dark-green-200">
                  Page Not Found
                </h1>
                <p className="mb-6 md:mb-8 text-base md:text-lg text-dark-green-300">
                  The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                </p>
                
                <Button onClick={handleBack} className="w-full sm:w-auto">
                  <HomeIcon className="h-4 w-4 md:h-5 md:w-5" />
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
