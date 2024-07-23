"use client";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Default
// staleTime: 0
// gc: 5 phút (5 * 1000* 60)

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // Tắt tự động fetch lại khi focus vào tab
    },
  },
});
// const AppContext = createContext({
//   isAuth: false,
//   role: undefined as RoleType | undefined,
//   setRole: (role?: RoleType | undefined) => {},
// });
// export const useAppContext = () => {
//   return useContext(AppContext);
// };
export default function AppProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // <AppContext.Provider>
    <QueryClientProvider client={queryClient}>
      {children}
      {/* <RefreshToken /> */}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
    // </AppContext.Provider>
  );
}
