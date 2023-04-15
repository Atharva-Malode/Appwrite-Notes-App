import React,{useState} from 'react'
import {database} from '../Appwrite/appwriteConfig'
import {v4 as uuidv4} from 'uuid'

function Notes() {
   const [Note,setNote] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
       const Promise =  database.createDocument("643a50009057605e211e", "643a50177e39018f3fc5",uuidv4(),{
            Note
        })
       Promise.then(
        function(response){
            console.log(response)
        },
        function(error){
            console.log(error)
        }
       )
       e.target.reset()
    }
    return (
        <div className="max-w-7xl mx-auto mt-10">
        <form
            action=""
            onSubmit={handleSubmit}
            className="flex justify-center mb-10"
        >
            <input
                type="text"
                name=""
                id=""
                placeholder="Enter Note"
                className="border p-2 w-2/3 rounded-md"
                onChange={(e) => {
                    setNote(e.target.value);
                }}
            />
            <button
                className="bg-purple-500 p-2 text-white ml-2 rounded-md"
                type="submit"
            >
                Add New Note
            </button>
        </form>
    </div>
  )
}
export default Notes