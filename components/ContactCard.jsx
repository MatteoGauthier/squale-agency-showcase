import React from "react"

function ContactCard({ name = "Mattèo Gauthier", imageSrc = "https://avatars.githubusercontent.com/u/32040951?v=4", content = "07 81 71 73 66" }) {
  function getHref(e) {
    if (e.includes("@")) {
      return "mailto:" + e.replace(/\s+/g, "")
    }
    if (e.includes("0")) {
      return "https://dialer.vercel.app/" + e.replace(/\s+/g, '')
    }
  }

  return (
    <a href={getHref(content)} className="flex flex-col space-y-3">
      <div className="flex p-2 space-x-2 bg-white rounded-lg shadow-card">
        <img src={imageSrc} className="rounded h-9 w-9 img-rendering-good" alt="Matteo image" />
        <div className="flex flex-col">
          <span className="font-medium text-[13px] text-gray-900 mb-[2px]">{name}</span>
          <span className="text-[#005AAC] text-xs">{content}</span>
        </div>
      </div>
    </a>
  )
}

export default ContactCard
