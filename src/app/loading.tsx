import { Loader2 } from "lucide-react"

const loading = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80" >
        <Loader2 className="text-primary animate-spin" size={25} strokeWidth={1.2} />
    </div>
  )
}

export default loading