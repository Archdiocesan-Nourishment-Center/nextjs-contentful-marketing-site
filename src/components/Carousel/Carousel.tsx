import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
type Props = {}

const Carousel = (props: Props) => {
    const [emblaRef] = useEmblaCarousel()
  return (
    <div className="embla overflow-hidden" ref={emblaRef}>
      <div className="embla__container flex">
        <div className="embla__slide flex-[0 0 100%]">Slide 1</div>
        <div className="embla__slide flex-[0 0 100%]">Slide 2</div>
        <div className="embla__slide flex-[0 0 100%]">Slide 3</div>
      </div>
    </div>
  )
}

export default Carousel