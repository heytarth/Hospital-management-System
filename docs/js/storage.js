// ===========================================
    // STORAGE HELPER FUNCTIONS
    // These replace window.storage with localStorage
    // localStorage is available in ALL browsers!
    // ===========================================
    const storage = {
      // GET data from localStorage
      get: (key) => {
        try {
          const value = localStorage.getItem(key);
          return value ? { value } : null;
        } catch (error) {
          console.error('Storage get error:', error);
          return null;
        }
      },
      
      // SET data in localStorage
      set: (key, value) => {
        try {
          localStorage.setItem(key, value);
          return { value };
        } catch (error) {
          console.error('Storage set error:', error);
          return null;
        }
      },
      
      // DELETE data from localStorage
      delete: (key) => {
        try {
          localStorage.removeItem(key);
          return { deleted: true };
        } catch (error) {
          console.error('Storage delete error:', error);
          return null;
        }
      },
      
      // LIST all keys with a prefix
      list: (prefix) => {
        try {
          const keys = [];
          for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key.startsWith(prefix)) {
              keys.push(key);
            }
          }
          return { keys };
        } catch (error) {
          console.error('Storage list error:', error);
          return { keys: [] };
        }
      }
    };
windows.storage=storage;
