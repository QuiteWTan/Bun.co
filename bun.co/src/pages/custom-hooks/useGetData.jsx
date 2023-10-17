import React, { useEffect, useState } from 'react'
import { db } from '../../../firebase.config'
import { collection, onSnapshot, getDocs } from 'firebase/firestore';
const useGetData = (collectionName) => {
    const [data,setData] = useState([]);
    const collectRef = collection(db, collectionName)
    useEffect(() => {
        const getData = async() => {
           await onSnapshot(collectRef, (snapshot)=> {
            setData(snapshot.docs.map((doc) => ({...doc.data(), id:doc.id})))
           })
            
            
        }
        getData()
    }, [])
    return { data }
}

export default useGetData
