

import Link from "next/link"
import type { ReactNode } from "react"

export default function ServiceLayout({ children }: { children: ReactNode }) {
    return (
        <div>
           <nav className="bg-gray-800 p-4">  
            <ul className="flex space-x-4 justify-center">
              <li><Link href="/service/mission" className="text-red-600 font-semibold hover:text-yellow-600 transition-colors">Mission</Link></li>
              <li><Link href="/service/vision" className="text-yellow-600 font-semibold hover:text-red-600 transition-colors">Vision</Link></li>
            </ul>
           </nav>
            {children}
        </div>
    );
}