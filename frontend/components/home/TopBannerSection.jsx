import Image from 'next/image'


export default function TopBannerSection() {
  return (
    <section className=''>
        <div className=" relative w-full  h-10">
            <Image src={"/images/banner-bg.png"} layout="fill"  objectFit='cover'  objectPosition="center" alt={""}/>
        </div>
    </section>
  )
}
