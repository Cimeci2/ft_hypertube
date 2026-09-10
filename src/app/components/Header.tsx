import Link from "next/link"

export default function Header() {  
    return (
        <>
            <div className='bg-amber-50 flex justify-between p-4 rounded-lg text-[var(--text-color-2)] shadow-md gap-0.5'>
                {/* left place */}
                <div>
                    logo
                </div>
                {/* title center place */}
                <div className='flex gap-2 font-semibold'>
                    <Link href="/">Home</Link>
                    <Link href="/login">Login</Link>
                    <Link href="/register">Register</Link>
                </div>
                {/* profil right place */}
                <div className="gap-2">
                    profile
                </div>
            </div>
        </>
    )
}