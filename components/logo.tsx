import { cn } from '@/lib/utils'
import Image from 'next/image'
import logo from '@/public/logo.png'
export const Logo = ({ className }: { className?: string }) => {
    return (
        <div className="">
            <Image
                src={logo}
                alt="Logo"
                width={150}
                />
        </div>

    )
}

export const LogoStroke = ({ className }: { className?: string }) => {
    return (
<div className="">

</div>
    )
}
