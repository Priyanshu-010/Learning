import { create } from "zustand"

interface CountStore {
  count: number
  increment: ()=>{}
  decrement: ()=>{}
  addByValue: (val:number)=>{}
}

const useCountStore = create<CountStore>((set)=>{
  return {
    count: 0,
    decrement: ()=> set((state) => ({count: state.count -1})),
    increment: ()=> set((state) => ({count: state.count +1})),
    addByValue: (val:number)=> set((state)=> ({count: state.count + val}))
  }
})

export default useCountStore