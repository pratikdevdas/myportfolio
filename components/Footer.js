
function Footer() {
  return (
        <div className='border-t-2 border-black  '>
            <div className='flex justify-center'>
                    <div className=' mt-3 w-20 h-6 bg-black rounded-md text-center text-white'>
                        Lets Connect
                   </div> 
            </div>
            <div className='flex justify-center flex-col sm:flex-row '>
                <div className='sm:px-8'>
                <a href="https://twitter.com/pratikdevdas">@pratikdevdas </a>
                </div>
                <div className='sm:px-4'>
                <a href="https://www.linkedin.com/in/pratikdevdas/"> pratikdevdas </a>
                </div>
                <div className='sm:px-4'>
                <a href="https://github.com/pratikdevdas"> pratikdevdas </a>
                </div>
                <div className='sm:px-8'>
                <a href="mailto:pratikdevdas@outlook.com"> emaol</a>

                </div>
            </div>
        </div>
  );
}

export default Footer;
