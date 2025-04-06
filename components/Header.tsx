"use client"

export default function Navbar() {
  return (
    <header className="w-full bg-white border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-center">
        {/* Centered logo with green box */}
        <div className="flex items-center">
          <div className="h-6 w-6 bg-green-500 mr-2"></div>
          <span className="text-xl font-bold">leadzup</span>
        </div>
      </div>
    </header>
  )
}

