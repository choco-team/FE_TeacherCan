const localStorageHelper = {
  get: <T extends number | string | object>(key: string): T | null => {
    const localStorageItem = localStorage.getItem(key);
    return localStorageItem ? JSON.parse(localStorageItem) : null;
  },
};

export default localStorageHelper;
