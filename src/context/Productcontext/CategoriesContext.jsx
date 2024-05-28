import React from 'react'
import { createContext,useState,useEffect } from 'react'
// import Shopdata from '../../Shopdata'
import { GetCategoriesAndDocuments } from '../../utility-files/firebase/Firebase'



export const CategoriesContext = createContext({
    categoriesmap: {},
  });
  
  export const CategoriesProvider = ({ children }) => {
    const [categoriesmap, setcategoriesmap] = useState({});
  
    useEffect(() => {
      const getcategoriesmap = async () => {
        try {
          const categorymap = await GetCategoriesAndDocuments();
          // console.log('Fetched Categories in Provider:', categorymap);
          setcategoriesmap(categorymap);
        } catch (error) {
          console.error('Error fetching categories:', error);
        }
      };
      getcategoriesmap();
    }, []);
  
    useEffect(() => {
      // console.log('Updated Categories Map:', categoriesmap);
    }, [categoriesmap]);
  
    const value = { categoriesmap };
    return (
      <CategoriesContext.Provider value={value}>
        {children}
      </CategoriesContext.Provider>
    );
  };