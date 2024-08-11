import { useEffect, useState } from "react"
import ReactOdometer from "react-odometerjs"
import "./Archievement.css"

export default function Archievement() {
    const [exp, setExp] = useState(0)
    const [projects, setProjects] = useState(0)
    const [clients, setClients] = useState(0)

    const scroll = window.addEventListener('scroll',()=>{
        
    })

    useEffect(()=>{
        const timeOutId = setTimeout(() => {
            setExp(78)
            setClients(44)
            setProjects(25)
        }, 3000);

        return () => clearTimeout(timeOutId)
    },[scroll])
  return (
    <div className="w-full pt-7">
        <div className="flex items-center justify-evenly w-full">
            <div className="p-4 bg-slate-900 border-teal-50 rounded font-bold  ">
                <div className="flex text-4xl text-center w-full items-center justify-center ">
                    <ReactOdometer value={exp}/>
                    <h1>+</h1>
                </div>
                <p>Years of experience</p>
            </div>

            <div className="p-4 bg-slate-900 border-teal-50 rounded font-bold">
                <div className="flex text-4xl text-center w-full items-center justify-center ">
                    <ReactOdometer value={clients}/>
                    <h1>+</h1>
                </div>
                <p>Clients world wide</p>
            </div>

            <div className="p-4 bg-slate-900 border-teal-50 rounded font-bold">
                <div className="flex text-4xl text-center w-full items-center justify-center ">
                    <ReactOdometer value={projects}/>
                    <h1>+</h1>
                </div>
                <p>Completed projects</p>
            </div>
        </div>
    </div>
  )
}