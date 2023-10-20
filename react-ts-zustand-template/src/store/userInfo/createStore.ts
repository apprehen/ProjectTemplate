import { create } from 'zustand'
import { userInfo } from './initState'
const useUserInfo = create((set: any, get: any) => ({
  ...userInfo,
  setUserInfo: (userInfo: any) => set(() => ({ ...get(), ...userInfo }))
}))

export default useUserInfo
