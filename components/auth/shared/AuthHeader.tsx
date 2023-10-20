import InstituteLogo from "@/public/assets/institute-logo.png"
import Image from "next/image"


function AuthHeader() {
  return (
  <div className="flex gap-4 p-6">
  <div>
      <Image src={InstituteLogo} alt="" />
  </div>

  <div>
      <h2 className='text-2xl font-bold font-[Poppins]'>Queens Land <br /> Academy </h2>
      <p>Okota</p>
  </div>

</div>
  )
}

export default AuthHeader
