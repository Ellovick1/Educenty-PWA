import Image from "next/image"
import EducentyLogo from '@/public/assets/Educenty-logo.png'


export const EnvHero = () => {
  return (
    <div className="flex mb-4 gap-2 flex-col justify-center items-center bg-accent w-screen  pt-32 py-10">
      {/* NOTE: current port logo, portal name, LGA(if institute)/Personal(if general) */}
      <Image src={EducentyLogo} alt="Educenty portal" width={100} height={100} className=" rounded-3xl" />
      <div className="text-center">
        <h1 className="font-bold text-2xl">{'Portal name'}</h1>
        <h1>{'portal LGA or personal'}</h1>
      </div>
    </div>
  )
}
