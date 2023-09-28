import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./Components/Navbar";
import { Notfound } from "./Components/Notfound";
import { Footer } from "./Components/Footer";
import { QueryClient, QueryClientProvider } from "react-query";
import Todo from "./Components/Todo/Todo";
import AddTodo from "./Components/Todo/AddTodo";
import Update from "./Components/Todo/Update";
import View from "./Components/Todo/View";
import { createContext, useState } from "react";
export const showState = createContext();
const App = () => {
const client = new QueryClient();
const [show,setShow] = useState(false)
  return (
    
    <QueryClientProvider client={client}>
    <showState.Provider value={{show,setShow}}>
    <BrowserRouter>
      <Navbar />
      <Routes>
      <Route path="/" element={<Todo />} />
      <Route path="/todo" element={<Todo />} />
      <Route path="/addtodo" element={<AddTodo/>} />
      <Route path="/update/:uid" element={<Update/>} />
      <Route path="/view/:id" element={<View/>} />
        <Route path="*" element={<Notfound />} />
      </Routes>
      <Footer />
      
    </BrowserRouter>
    </showState.Provider>
    </QueryClientProvider>

  );
};

export default App;
