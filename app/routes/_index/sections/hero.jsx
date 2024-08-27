import { Button } from '@h2/new/Button'
import { Heading, Text } from '@h2/new/Text'
import { Image } from '@shopify/hydrogen'
import { Button as Button_2 } from '/app/components/hydrogen/Button.jsx'

export default function Hero() {
  return (
    <section className='w-full relative min-h-8 h-svh max-h-[64rem] bg-darkGray'>
      <div
        className='min-h-inherit h-full mx-auto px-4 md:px-8 lg:px-10 w-full relative z-10 max-w-7xl pb-24 pt-36'
        style={{ left: -140, top: 66 }}
      >
        <div className='w-auto min-h-inherit h-full items-start justify-between flex flex-col'>
          <div className='w-auto h-auto gap-4 items-start justify-center flex flex-col pt-[10vh]'>
            <Text
              uppercase
              size={6}
              font='display'
              color='accent'
              className='pl-1'
            >
              fwfwefwefwefw
            </Text>
            <Heading font='text' size='8' color='white'>
              sadqdw
            </Heading>
            <Heading
              font='display'
              size='8'
              color='white'
              style={{ height: 106 }}
            >
              Essentials
            </Heading>
          </div>
          <Button to='/products/builder-tote'>
            Shop now
          </Button>
        </div>
      </div>
      <div className='grid absolute z-0 inset-0 pointer-events-none grid-cols-2'>
        <div style={{ contain: 'layout' }}>
          <div
            style={{
              backgroundColor: '#aaaaaa33',
              position: 'absolute',
              left: 105,
              top: 475,
              width: 100,
              height: 100,
            }}
          >
            <div
              style={{
                backgroundColor: '#aaaaaa33',
                position: 'absolute',
                left: -5,
                top: -4,
                width: 100,
                height: 100,
              }}
            />
          </div>
        </div>
        <div className='relative'>
          <div className='absolute inset-0 bg-gradient-to-r from-darkGray to-transparent to-50% z-0' />
          <Image
            src='https://cdn.shopify.com/s/files/1/0657/3811/3197/files/home-hero.jpg?v=1716832320'
            className='object-cover w-full h-full -z-10'
          />
        </div>
        <Button>Sample Button</Button>
        <div
          style={{
            backgroundColor: '#aaaaaa33',
            position: 'absolute',
            left: 187,
            top: 218,
            width: 187,
            height: 218,
            gridColumn: 1,
            gridRow: 1,
          }}
        />
      </div>
    </section>
  )
}
