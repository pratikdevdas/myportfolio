
import { AnnotationIcon, GlobeAltIcon, LightningBoltIcon, ScaleIcon } from '@heroicons/react/outline'

const features = [
  {
    name: 'Competitive exchange rates',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: GlobeAltIcon,
    readmore : 'Read More'
  },
  {
    name: 'No hidden fees',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: ScaleIcon,
    readmore : 'Read More'
  },
  {
    name: 'Transfers are instant',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: LightningBoltIcon,
    readmore : 'Read More'
  },
  {
    name: 'Mobile notifications',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: AnnotationIcon,
    readmore : 'Read More'
  },
]

const Blogs = () => {
  return (
    <div>
      <div className="text-3xl pl-10">Blogs</div>
  
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto py-6 lg:text-center">
            I write blogs when I am bored.... asdasdsadoas
          </p>
   

        <div className="my-10 ">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 ">
            {features.map((feature) => (
              <div key={feature.name} className="relative border-2 border-black rounded-lg ">
                <dt>
                  
                  <h3 className=" ml-4 text-lg leading-6 text-gray-900 font-extrabold">{feature.name}</h3>
                </dt>
                <dd className="mt-2 ml-8 text-base text-gray-500">{feature.description}</dd>
                <dd className='ml-8 underline font-bold'><a href="">{feature.readmore}</a></dd>
              </div>
            ))}
          </dl>
        </div>
    
    </div>
    </div>
  )
}

export default Blogs