import React, { useContext, useEffect, useState } from 'react'
import { Container, Grid, Item } from 'semantic-ui-react'
import AppMenu from './AppMenu'
import { auth, firestore } from './../firebase'
import { AuthContext } from './../Providers/AuthProvider';
import faker from 'faker';

import data from './../assets/data.json';
import ItemCard from './ItemCard'

const ItemContainer = (props) => {

  const authContext = useContext(AuthContext);

  const [productData, setproductData] = useState(null)
  var myData;

  useEffect(() => {

    // firestore.collection("products").add({
    //   info:
    //   {
    //     title: faker.name.title(),
    //     itemID: faker.random.number(),
    //     description: faker.name.jobDescriptor(),
    //     ratingCount: faker.random.number(),
    //     rating: faker.random.number(),
    //     cost: faker.random.number(),
    //     seller: faker.name.firstName()
    //   }
    // })
    //   .then(function (docRef) {
    //     console.log(faker.name.title(), "Document written with ID: ", docRef.id);
    //   })
    //   .catch(function (error) {
    //     console.error("Error adding document: ", error);
    //   });


    const getData = async () => {
      const trueData = await firestore.collection("products").get()
      setproductData(trueData.docs.map(doc => ({ ...doc.data(), id: doc.id })))

    }

    getData();
    // .then((querySnapshot) => {
    //   querySnapshot.forEach((doc) => {
    //     // console.log(`${doc.id} => ${doc.data()}`);
    //     console.log("get the keys", typeof (doc.data()), doc.data().info)
    //     setproductData([doc.data().info])
    //     // setproductData(doc.data().info)
    //     // myData = doc.data().info


    //   });
    // });

  }, [])



  return (


    // data.map(function(item, i){
    //   console.log('test');
    //   return <li key={i}>Test</li>
    // })


    <div>
      <Container >
        <Grid  >
          <Grid.Row columns={4} >
            {/* {console.log('product data ', productData)} */}

            {productData.map(function (item, i) {
              { console.log('thigns happened', item, i) }
              // return <Grid.Column key={item.info.itemID}>
              //   <ItemCard data={item} />
              // </Grid.Column>
            })}



          </Grid.Row>
        </Grid>

      </Container>
    </div>
  )
}
export default ItemContainer