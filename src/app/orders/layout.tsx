
import type { Metadata } from 'next'
export const metadata: Metadata = {
    title: 'View Order - BATRA',
    description: 'Generated by create next app',
}
export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
            <div>
                {children}
            </div>
    )
}
