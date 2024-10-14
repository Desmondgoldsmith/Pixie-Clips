'use client'
import React, {useState} from "react";
import {Button} from '@/components/ui/button'
import {Plus} from "lucide-react"
import NoVideo from './_component/noVideo'
import Link from 'next/link'
import { useUser } from "@clerk/nextjs";

const Dashboard = () => {
  const { user } = useUser();
const [availableVideo, setAvailableVideo] = useState()
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
          <h2>Welcome, <span className = "font-bold text-primary-dark">{user?.fullName}</span> </h2>
          <Link href="/dashboard/new">
          <Button className="bg-primary hover:bg-primary-light text-white">
            <Plus className="mr-2 h-4 w-4" /> Add Video
          </Button>  
        </Link>
      </div>

      <div className="flex justify-center items-center h-[calc(100vh-200px)]">
        {!availableVideo && <NoVideo />}
      </div>
    </div>
  );
};


export default Dashboard;
