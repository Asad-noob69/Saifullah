import type React from "react"
import { Linkedin } from "lucide-react"
import { NumberTicker } from "@/components/magicui/number-ticker";

interface LinkedInFollowersButtonProps {
  companyId?: string
  followers?: number
}

const LinkedInFollowersButton: React.FC<LinkedInFollowersButtonProps> = ({ followers = 18503 }) => {
  return (
    <a
      href={"https://www.linkedin.com/in/saifullah-khan-4aa554231/"}
      className="inline-flex items-center gap-2 bg-gradient-to-r from-[#0077B5] to-[#005582] text-white rounded-full px-3 py-1.5 text-sm font-medium hover:opacity-90 transition-opacity"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Linkedin className="h-4 w-4" />
      <span>LinkedIn</span>
      <div className="flex items-center gap-1 text-gray-400">
        <span className="text-gray-400">★</span>
        <NumberTicker
          value={followers}
          className="whitespace-pre-wrap text-sm font-medium tracking-tighter text-white"
        />
      </div>
    </a>
  )
}

export default LinkedInFollowersButton