// src/AuthProvider.tsx
import React, { useEffect, useState } from "react";
import { firestore } from './../firebase';

export const DataContext = React.createContext();

export const DataProvider = ({ children }) => {
    const [productData, setProductData] = useState(null);
    var myArray = []

    useEffect(() => {
        const getme = function () {

            return firestore.collection("products").get().then(function (querySnapshot) {
                querySnapshot.forEach(function (doc) {
                    // doc.data() is never undefined for query doc snapshots
                    console.log(doc.id, " => ", doc.data());
                    myArray.push(doc.data())
                    return setProductData(myArray)
                });
            });

        }

        getme()
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