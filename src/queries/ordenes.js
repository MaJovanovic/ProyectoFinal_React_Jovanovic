import { collection, doc, getDoc, getDocs, setDoc, where, query, deleteDoc } from 'firebase/firestore';

const ORDER_COLLECTION = 'ordenes';

export const getAllOrders = (db) => {
  const collectionRef = collection(db, ORDER_COLLECTION);
  return getDocs(collectionRef)
    .then((snapshot) => {
      const orders = [];
      snapshot?.docs?.forEach((item) => {
        orders.push({
          id: item.id,
          ...item.data()
        })
      })
      return orders;
    })
    .catch((error) => {
      return error;
    })
}

export const getOrderById = (db, id) => {
  const documentRef = doc(db, ORDER_COLLECTION, id);
  return getDoc(documentRef)
    .then((dataFB) => {
      if(dataFB.exists){
        return {
          id: dataFB.id,
          ...dataFB.data()
        }
      }
    })
}



export const setOrderById = (db, data, id=null) => {
  let tempId = null
  if (id) {
    tempId = id;
  } else {
    tempId = `orden-${Math.random()}`
  }
  
  return setDoc(doc(db, ORDER_COLLECTION, tempId), data)
    .then((data) => {
      //console.log("Informacion guardada: ", data);
      return tempId
      
    })
    .catch((error) => {
      //console.log('error:', error)
      return null
    })
    
}

export const deleteOrderById = (db, id) => {
  return deleteDoc(doc(db, ORDER_COLLECTION, id))
}