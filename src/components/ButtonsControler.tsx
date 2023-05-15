import { ChevronLeft, ChevronRight } from "lucide-react"

export function ButtonsControler() {
    return (
        <div className="flex items-center gap-3">
            <button className="rounded-full bg-black/40 p-1" title="Back">
              <ChevronLeft />
            </button>
            <button className="rounded-full bg-black/40 p-1" title="Back">
              <ChevronRight />
            </button>
        </div>
    )
}