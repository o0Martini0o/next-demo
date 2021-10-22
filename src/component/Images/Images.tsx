import Image from 'next/image'

export const Images = () => (
    <>
      <Image
          src="/images/profile.jpeg" // Route of the image file
          height={144} // Desired size with correct aspect ratio
          width={144} // Desired size with correct aspect ratio
          alt="Your Name"
      />
    </>
)
