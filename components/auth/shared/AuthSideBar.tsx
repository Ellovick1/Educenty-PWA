import InstituteBgImg from "@/public/assets/InstituteBg-img.png"



function AuthSideBar() {
  return (
    <div className="col-span-2"
        style={{
          backgroundImage: `url(${InstituteBgImg.src})`,
          height: "100vh",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }} >
        hello
      </div>

  )
}

export default AuthSideBar
