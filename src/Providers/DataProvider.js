// src/AuthProvider.tsx
import React, { useEffect, useState } from "react";
import { firestore } from './../firebase';

export const DataContext = React.createContext();

export const DataProvider = ({ children }) => {
    const [productData, setProductData] = useState(null);
    const arrayData = [];

    useEffect(() => {
        firestore.collection("products").get().then(function (querySnapshot) {
            // querySnapshot.forEach(function (doc) {
            //     // doc.data() is never undefined for query doc snapshots
            //     // console.log(doc.id, " => ", doc.data());
            //     // setProductData([...doc.data()])
            //     arrayData.push(doc.data())
            //     setProductData([...doc.data()])

            // });
            setProductData(querySnapshot)

        });
        // setProductData('cheese')
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