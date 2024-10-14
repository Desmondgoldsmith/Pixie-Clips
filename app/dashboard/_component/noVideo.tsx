import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Plus } from "lucide-react"

const NoVideo = () => {
    return (
        <div className="flex flex-col items-center justify-center p-12 text-center border-2 border-dashed border-primary rounded-lg shadow-lg bg-white">
            <h2 className="text-2xl font-bold mb-4 text-primary">You haven't created any videos yet!</h2>
            <p className="text-gray-600 mb-6">Get started by creating your first video</p>
            <Link href='/dashboard/new'>
                <Button className="bg-primary hover:bg-primary-light text-white transition-colors duration-200">
                    <Plus className="mr-2 h-4 w-4" /> Create a video
                </Button>
            </Link>
        </div>
    )
}

export default NoVideo