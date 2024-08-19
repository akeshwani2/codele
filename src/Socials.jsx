import Link from "next/link";
import{ FaGithub, FaLinkedinIn } from "react-icons/fa"

const socials = [
    {icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/arhaan-keshwani"},
    {icon: <FaGithub />, path: "https://github.com/akeshwani2"},
]

const Social = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
        {socials.map((item, index)=> {
            return <Link key={index} href={item.path} className={iconStyles}>{item.icon}</Link>
        })}
    </div>
  )
}

export default Social;