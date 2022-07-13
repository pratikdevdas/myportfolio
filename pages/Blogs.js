
import { AnnotationIcon, GlobeAltIcon, LightningBoltIcon, ScaleIcon } from '@heroicons/react/outline'

const features = [
  {
    name: 'Competitive exchange rates',
    description:
      'Before starting a project my enthusiasm really kicks in and I almost certainly forget to implement es-lint in any of the projects I start',
    icon: GlobeAltIcon,
    readmore : 'Read More',
    url: 'https://reliable-calliandra-778.notion.site/My-Code-a-k-a-JS-linting-2cad0a10706542d48752ff96b1ab942b'
  },
  {
    name: 'React, the thing which I almost messed up',
    description:
      'Pretty daunting for a title right, but I almost did a refactoring at a cost of sensibility.',
    icon: ScaleIcon,
    url:'https://reliable-calliandra-778.notion.site/React-the-thing-which-I-almost-messed-up-584e51da54a94d5c9daaf8aa8ced919d'

  },
  {
    name: 'Redux Notes',
    description:
      'Yeah, I go through them everytime I start a new project with redux',
      url:'https://reliable-calliandra-778.notion.site/Redux-2297f0aee027459d854839c7ea0ce06c'
  },
  {
    name: 'Fullstackopen Part 2.1 & 2.2',
    description:
      'A summary of fullstackopen Part 2.1(rendering collection from data) and Part2.2(rendering collection with forms)',
      url:'https://reliable-calliandra-778.notion.site/Fullstackopen-Part-2-1-2-2-155c7627881042f7afcd692c413453e5'

  }

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
                <dd className='ml-8 underline font-bold'><a href={feature.url}>Read More</a></dd>
              </div>
            ))}
          </dl>
        </div>
    
    </div>
    </div>
  )
}

export default Blogs