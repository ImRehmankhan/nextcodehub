import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

const API = async (method, url, body = null, isFile = false) => {
  try {
    const options = { method };

    if (method.toUpperCase() !== "GET" && body) {
      options.body = isFile ? body : JSON.stringify(body);
    }

    if (!isFile && method.toUpperCase() !== "GET") {
      options.headers = { "Content-Type": "application/json" };
    }

    const res = await fetch(`/api/${url}`, options);
    
    if (res.ok) {
      const contentType = res.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        return await res.json();
      } else {
        return await res.text();
      }
    }
    else {
      const contentType = res.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        const errorData = await res.json();
        throw new Error(errorData.error || "API Error");
      } else {
        const errorText = await res.text();
        throw new Error(errorText || "API Error");
      }
    }
   
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};

export function useCallAPI(resourceName, resourceUrl) {
  const queryClient = useQueryClient();

  const getAll = useQuery({
    queryKey: [resourceName],
    queryFn: () => API("GET", resourceUrl),
  });

  // POST - Add new resource
  const add = useMutation({
    mutationFn: (newItem) => {
      const isFile = newItem instanceof FormData;
      return API("POST", resourceUrl, newItem, isFile);
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: [resourceName] }),
  });

  // PUT - Update resource by ID
  const update = useMutation({
    mutationFn: (updatedItem) => {
      const isFile = updatedItem instanceof FormData;
      return API("PUT", `${resourceUrl}`, updatedItem, isFile);
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: [resourceName] }),
  });

  // DELETE - Delete resource by ID
  const remove = useMutation({
    mutationFn: (id) => API("DELETE", `${resourceUrl}/${id}`),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: [resourceName] }),
  });

  return {
    getAll,
    add,
    update,
    remove,
  };
}
