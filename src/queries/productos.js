import { collection, doc, getDoc, getDocs, setDoc, where, query, deleteDoc } from 'firebase/firestore';

const PRODUCT_COLLECTION = 'productos';

export const getAllProducts = (db) => {
  const collectionRef = collection(db, PRODUCT_COLLECTION);
  return getDocs(collectionRef)
    .then((snapshot) => {
      const products = [];
      snapshot?.docs?.forEach((item) => {
        products.push({
          id: item.id,
          ...item.data()
        })
      })
      return products;
    })
    .catch((error) => {
      return error;
    })
}

export const getProductById = (db, id) => {
  const documentRef = doc(db, 'productos', id);
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

export const getProductsByCategory = (db, category_id) => {
  const collectionRef = query(
    collection(db, PRODUCT_COLLECTION),
    where('categoria', '==', category_id)
  )
  return getDocs(collectionRef)
    .then((snapshot) => {
      const products = [];
      snapshot?.docs?.forEach((item) => {
        products.push({
          id: item.id,
          ...item.data()
        })
      })
      return products;
    })
    .catch((error) => {
      return error;
    })
}

export const setProductById = (db, data, id=null) => {
  let tempId = null
  if (id) {
    tempId = id;
  } else {
    tempId = `product-${Math.random()}`
  }
  return setDoc(doc(db, PRODUCT_COLLECTION, tempId), data)
    .then((data) => {
      console.log("Informacion guardada: ", data);
    })
    .catch((error) => {
      console.log('error:', error)
    })
}

export const deleteProductById = (db, id) => {
  return deleteDoc(doc(db, PRODUCT_COLLECTION, id))
}