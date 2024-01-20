export const useAuth = () => {
  const requestUserAuth = (username: string, password: string): string[] => {
    return username && password ? ['Member', 'Supplier', 'Admin'] : [];
  }

  return {
    requestUserAuth
  }
}