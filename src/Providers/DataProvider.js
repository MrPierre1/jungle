// src/AuthProvider.tsx
import React, { useEffect, useState } from "react";
import { firestore } from './../firebase';

export const DataContext = React.createContext();

export const DataProvider = ({ children }) => {
    const [productData, setProductData] = useState([]);
    var myArray = []

    useEffect(() => {
        // const getMyData = function () {

        //     firestore.collection("products").orderBy('')

        //     .get().then(function (querySnapshot) {
        //         querySnapshot.forEach(function (doc) {
        //             // doc.data() is never undefined for query doc snapshots
        //             // console.log(doc.id, " => ", doc.data());
        //             myArray.push(doc.data())
        //             setProductData(doc.data())
        //         });
        //     });
        //     // setProductData(myArray)
        // }

        // return getme()

    }, []);


    return (
        <DataContext.Provider
            value={{
                productData
            }}
        >
            {children}
        </DataContext.Provider>
    );
};